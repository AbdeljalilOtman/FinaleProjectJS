<template>
    <div ref="componentContainer" class="component-container">
      <component v-if="workingTemplate && templateData"
                 :is="workingTemplate"
                 :initial="templateData" @saveChanges="saveAllChanges" />
      <div v-else>
        <p v-if="isLoading">Loading...</p>
        <p v-else-if="loadError">Failed to load data. Please try again later.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { getRecentChangesById } from '../composables/useFirestore.js';
  import { saveChange } from '@/composables/useFirestore.js'; // Adjust the import path as needed
import html2canvas from 'html2canvas';
import getUser from '@/composables/getUser';

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

          this.work = await getRecentChangesById(userId, this.recentWorkId);
          if (this.work && this.work.templateId && this.work.templateData) {
            this.templateData = this.work.templateData;
            const component = await import(`../components/Template${this.work.templateId}.vue`);
            this.workingTemplate = component.default;
            
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
      async captureSnapshot() {
        try {
          const container = document.querySelector('#template');
          console.log(container);
          const canvas = await html2canvas(container);
          this.snapshot = canvas.toDataURL('image/png');
          //console.log(this.snapshot);       

        } catch (error) {
          console.error('Error capturing snapshot:', error);
        }
      },
      async saveAllChanges(templateData) {
        try {
          const { user } = getUser(); // Use destructuring to get the user ref
          const userId = user.value ? user.value.uid : null; // Safely get the user ID

          if (!userId) {
            throw new Error('User is not authenticated');
          }

          //console.log(userId);
          await this.captureSnapshot(); // Capture snapshot before saving changes
          templateData[1].snapshot = this.snapshot; // Update snapshot in templateData

          console.log(templateData[1]);
          await saveChange(userId, templateData[0], templateData[1]); // Pass the user ID to saveChange
          alert('Changes saved successfully!');
          
        } catch (error) {
          console.error('Failed to save changes:', error);
          alert('Failed to save changes.');
        }
    } 
    }
  };
  </script>
  
  <style scoped>
  .component-container {
    /* Style your component container for snapshot here */
  }
  </style>
  