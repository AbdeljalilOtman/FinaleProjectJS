<template>
  <div style="padding-left: 20%;padding-right: 20%;">
    <component :is="templateComponent" @saveChanges="saveAllChanges" style="margin-left: calc(2rem + 50px);" class="template-container" />

  </div>
</template>

<script>
import { saveChange } from '@/composables/useFirestore.js'; // Adjust the import path as needed
import html2canvas from 'html2canvas';
import getUser from '@/composables/getUser';
import TextEditor from '@/components/TextEditor.vue'

export default {
  name: 'TemplateView',
  components:{
    TextEditor
  },
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
#template {
    width: 210mm; /* or 8.27in */
    margin: 0 auto; /* Center the template */
    margin-left: 20%;
    padding: 20mm; /* Optional: add some padding */
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
}


</style>
