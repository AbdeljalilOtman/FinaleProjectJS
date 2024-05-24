<template>
  <RecentWork/>
  <Templates/>
</template>

<script>
import Templates from '../components/Templates.vue';
import RecentWork from '../components/RecentWork.vue' ; 

export default {
  name: 'dashboard',
  components: {
    Templates, RecentWork
  },
  data() {
    return {

    };
  }
};
</script>

<style>

</style>
