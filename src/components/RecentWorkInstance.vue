<template>
    <div ref="componentContainer" class="component-container">
      <component v-if="workingTemplate && templateData"
                 :is="workingTemplate"
                 :initial="templateData" />
      <div v-else>
        <p v-if="isLoading">Loading...</p>
        <p v-else-if="loadError">Failed to load data. Please try again later.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { getRecentChangesById } from '../composables/useFirestore.js';
  import html2canvas from 'html2canvas';
  
  export default {
    name: 'RecentWorkInstance',
    props: {
      recentWorkId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        work: null,
        workingTemplate: null,
        templateData: null,
        isLoading: true,
        loadError: false
      };
    },
    async mounted() {
      const userId = "currentUser"; // Replace with actual user context
      console.log('Recent work ID:', this.recentWorkId);
      try {
        // Check localStorage for existing snapshot
        const cachedSnapshot = localStorage.getItem(this.recentWorkId);
        console.log(cachedSnapshot)
          this.work = await getRecentChangesById(userId, this.recentWorkId);
          if (this.work && this.work.templateId && this.work.templateData) {
            this.templateData = this.work.templateData;
            const component = await import(`../components/Template${this.work.templateId}.vue`);
            this.workingTemplate = component.default;
            // Capture snapshot after template has been rendered with actual data
            if (!cachedSnapshot) {

                this.$nextTick(() => {
                this.captureSnapshot();
                });
            }
          } else {
            this.loadError = true;
          }
        
      } catch (error) {
        console.error('Error loading recent changes by ID:', error);
        this.loadError = true;
      } finally {
        this.isLoading = false;
      }
    },
    methods: {
      captureSnapshot() {
        html2canvas(this.$refs.componentContainer).then(canvas => {
          const snapshotUrl = canvas.toDataURL('image/png');
          localStorage.setItem(this.recentWorkId, snapshotUrl);
        }).catch(error => {
          console.error('Error capturing snapshot:', error);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .component-container {
    /* Style your component container for snapshot here */
  }
  </style>
  