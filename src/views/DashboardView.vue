<template>
  <div class="dashboard">
    <div class="recent-work">
      <RecentWork />
    </div>
    <div class="templates">
      <Templates />
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
}

.recent-work, .templates {
  flex: 1; /* Adjust this to control how much space each component takes */
  padding: 20px; /* Provides spacing around each component */
}

/* Add responsive adjustments if needed */
@media (max-width: 768px) {
  .dashboard {
    flex-direction: column;
  }
}
</style>