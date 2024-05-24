<template>
    <div class="templates container mt-5">
      <h1 class="mb-4 text-center">Choose a Template</h1>
      <div class="row">
        <div v-for="template in templates" :key="template.id" class="col-md-4 mb-4">
          <div class="card h-100">
            <img :src="template.image" class="card-img-top" alt="Template image">
            <div class="card-body">
              <h5 class="card-title">{{ template.name }}</h5>
              <p class="card-text">{{ template.description }}</p>
              <button class="btn btn-primary" @click="selectTemplate(template.name)">Select Template</button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="selectedTemplate" class="template-view mt-5">
        <component :is="selectedTemplate" />
      </div>
    </div>
  </template>
  
  <script>
  import Template1 from '../components/Template1.vue';
  import Template2 from '../components/Template2.vue';
  
  export default {
    name: 'Templates',
    components: {
      Template1,
      Template2
    },
    data() {
      return {
        templates: [
          {
            id: 1,
            name: 'Template1',
            description: 'A modern and clean template.',
            image: 'path/to/image1.jpg' // Replace with actual path or URL
          },
          {
            id: 2,
            name: 'Template2',
            description: 'A professional and elegant template.',
            image: 'path/to/image2.jpg' // Replace with actual path or URL
          }
          // Add more templates as needed
        ],
        selectedTemplate: null
      };
    },
    methods: {
      selectTemplate(templateName) {
        this.selectedTemplate = templateName;
      }
    }
  };
  </script>
  
  <style scoped>
  .template-view {
    margin-top: 20px;
  }
  </style>
  