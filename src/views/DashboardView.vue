<template>
  <div class="dashboard" style="  margin-left: calc(2rem + 50px);">
    <div class="bord">
      <div class="templates">
      <Templates />
    </div>
      <div class="recent-work">
      <RecentWork />
    </div>


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

.bord{
  border-style:solid ;
  border-width: 7px;
  border-color: black;
  margin: 3% 3% ;
  border-radius: 20px;

}

.recent-work, .templates {
  flex: 1; /* Adjust this to control how much space each component takes */
  padding-left: 3%; /* Provides spacing around each component */
  padding-right: 3%;

  
}

/* Add responsive adjustments if needed */
@media (max-width: 768px) {
  .dashboard {
    flex-direction: column;
  }
}
</style>