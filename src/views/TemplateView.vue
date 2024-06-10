<template>
  <component :is="templateComponent" @saveChanges="saveAllChanges" style="margin-left: calc(2rem + 50px);" class="template-container" />
</template>

<script>
import { saveChange } from '@/composables/useFirestore.js'; // Adjust the import path as needed
import html2canvas from 'html2canvas';
import getUser from '@/composables/getUser';

export default {
  name: 'TemplateView',
  data() {
    return {
      id: '',
      templateComponent: null,
      snapshot: ''
    };
  },
  methods: {
    async loadTemplateComponent() {
      this.id = this.$route.params.id;

      try {
        const component = await import(`../components/Template${this.id}.vue`);
        this.templateComponent = component.default;
      } catch (error) {
        console.error(`Failed to load component for template id: ${this.id}`, error);
        this.templateComponent = null;
      }
    },
    async captureSnapshot() {
      try {
        const container = document.querySelector('#template');
        console.log(container);

        const canvas = await html2canvas(container);
        this.snapshot = canvas.toDataURL('image/png');

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
  },
  watch: {
    '$route.params.id': 'loadTemplateComponent'
  },
  created() {
    this.loadTemplateComponent();
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
