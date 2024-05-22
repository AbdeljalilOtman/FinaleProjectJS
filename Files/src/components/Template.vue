<template>
    <div id="resumeContainer">
      <div v-if="error">{{ error }}</div>
      <div v-else-if="temp">
        <!-- Render the template content here -->
        <div v-html="temp.url"></div>
      </div>
      <div v-else>Loading...</div>
    </div>
  </template>
  
  <script>
    import getTemplate from '@/templates/get.js';



  export default {
    name: 'Template',
    props: ['id'],
    data() {
        return {
            
        }
    },
    async mounted () {
        const template = await getTemplate(this.id);
        console.log(template.url)
 

    }
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  