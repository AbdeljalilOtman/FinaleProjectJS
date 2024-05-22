<template>
  <div class="dashboard">
    <div class="recent">
    </div>
    <div class="templates">
      <span>To create a new resume, choose a template</span>
      <div v-for="template in templates" :key="template.id">
        <Template :id="template.id" />
      </div>
    </div>
  </div>
</template>

<script>
import Template from '../components/Template.vue';

export default {
  name: 'Dashboard',
  components: {
    Template
  },
  data() {
    return {
      templates: [
        { id: 'gphXBLKAAJwTDRQ0uetH' },
      ]
    };
  }
};
</script>

<!-- Add your styles here -->
<style>
/* Add your styles for the dashboard here */
</style>
