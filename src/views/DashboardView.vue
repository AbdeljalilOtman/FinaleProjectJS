<template>
  <div class="dashboard">
    <div class="templates">
      <Templates />
    </div>
    <div class="recent-work">
      <RecentWork />
    </div>

  </div>
</template>

<script>
import Templates from '../components/Templates.vue';
import RecentWork from '../components/RecentWork.vue';

export default {
  name: 'dashboard',
  components: {
    Templates, RecentWork
  },
  data() {
    return {
    };
  },
  mounted() {

  }
};
</script>
<style scoped>
.dashboard {
width: 100%;
position: relative;
overflow: auto;
}

.recent-work, .templates {
  flex: 1; /* Adjust this to control how much space each component takes */
  padding-left: 5%; /* Provides spacing around each component */
  padding-right: 5%;
  
}

/* Add responsive adjustments if needed */
@media (max-width: 768px) {
  .dashboard {
    flex-direction: column;
  }
}
</style>