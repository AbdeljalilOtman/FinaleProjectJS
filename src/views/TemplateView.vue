<template>
      <component :is="templateComponent" />
  </template>
  
  <script>
  export default {
    name: 'TemplateView',
    data() {
      return {
        id: '',
        templateComponent: null
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
          this.imported = false;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  