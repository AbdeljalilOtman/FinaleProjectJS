<template>
  <div>

      <RecentWork />
      <Templates />
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
/* Add your styles here */
</style>
