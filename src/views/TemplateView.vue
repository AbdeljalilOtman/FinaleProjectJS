<template>
  <div class="template-view-container">

    <component :is="templateComponent" @saveChanges="saveAllChanges" @exportAsPDF="exportAsPDF" class="template-container" />
  </div>
</template>

<script>
import { saveChange } from '@/composables/useFirestore.js'; // Adjust the import path as needed
import html2canvas from 'html2canvas';
import getUser from '@/composables/getUser';
import html2pdf from 'html2pdf.js'

export default {
  name: 'TemplateView',

  data() {
    return {
      id: '',
      templateComponent: null,
      snapshot: '',
      exported:false
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

        console.log(templateData);

        await saveChange(userId, templateData[0], templateData[1],this.exported); // Pass the user ID to saveChange
        alert('Changes saved successfully!');

      } catch (error) {
        console.error('Failed to save changes:', error);
        alert('Failed to save changes.');
      }
      
    },
    async exportAsPDF(templateData) {
    // Select the template container
    let template = document.querySelector('#template');
    const buttons = document.querySelectorAll('.icon');
    buttons.forEach(button => {
        button.remove()
    });

    // Options for html2pdf
    const options = {
        margin: 0,
        filename: 'template.pdf',
        image: { type: 'jpeg', quality: 0.99 },
        html2canvas: { scale: 1 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };


    await html2pdf().from(template).set(options).save();
    this.exported=true;
    console.log('PDF exported successfully!');
    await this.saveAllChanges(templateData);

    window.location.reload()


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

<style scoped >
.template-view-container{
  padding-left: 10%;
  padding-right: 10%;
  margin-left: 20%;
  

}
#template {
    width: 212mm; /* or 8.27in */
    margin-top: 2vh;
    overflow: hidden;
    border-style: solid;
    border-color: black;
}



</style>
