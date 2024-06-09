<template>
    <RecentWorkInstance :recentWorkId="id" style="margin-left: calc(2rem + 50px);" />
  </template>
  
  <script>
  import RecentWorkInstance from '../components/RecentWorkInstance.vue';


  export default {
    name: 'RecentView',
    components: {
      RecentWorkInstance
    },
    data() {
      return {
        id: ''
      };
    },
    created() {
      this.id = this.$route.params.id;
     // console.log(this.id)
    },
    methods: {

    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  