<template>
  <component :is="templateComponent" @saveChanges="saveAllChanges"/>
</template>

<script>
import { saveChange } from '@/composables/useFirestore.js'; // Adjust the import path as needed
import html2canvas from 'html2canvas';

export default {
  name: 'TemplateView',
  data() {
    return {
      id: '',
      templateComponent: null,
      snapshot: ''
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.loadTemplateComponent();
  },
  watch: {
    '$route.params.id': 'loadTemplateComponent'
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
        const container = this.$el.querySelector('.container'); // Adjusted reference to the correct element
        const canvas = await html2canvas(container);
        this.snapshot = canvas.toDataURL('image/png');
      } catch (error) {
        console.error('Error capturing snapshot:', error);
      }
    },
    async saveAllChanges(templateData) {
      try {
        await this.captureSnapshot(); // Capture snapshot before saving changes
        templateData[2].snapshot = this.snapshot; // Update snapshot in templateData
        await saveChange(templateData[0], templateData[1], templateData[2]);
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
/* Add your styles here */
</style>
