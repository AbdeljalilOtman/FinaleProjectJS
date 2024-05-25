<template>
  <div>
    <h2>Check out your recent actions</h2>
    <div class="recent-works-container">
      <div v-for="work in recents" :key="work.id" class="work-item">
        <router-link :to="`/dashboard/recents/${work.id}`">
          <div class="card">
            <img :src="work.templateData.snapshot" alt="Snapshot of the component" class="snapshot-img">
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecentChanges } from '../composables/useFirestore.js';
import getUser from '@/composables/getUser.js';
export default {
  name: 'RecentWork',
  data() {
    return {
      recents: []
    };
  },
  async mounted() {
    const { user } = getUser(); // Use destructuring to get the user ref
    const userId = user.value.uid ;
    console.log(userId)
    try { 
      this.recents = await getRecentChanges(userId);
    } catch (error) {
      console.error('Error fetching recent changes:', error);
    }
  }
};
</script>

<style scoped>
.recent-works-container {
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling */
  gap: 20px;
  padding-bottom: 10px; /* Add some space at the bottom for better visibility */
}

.work-item {
  flex: 0 0 auto; /* Prevent items from shrinking */
  width: 80%; /* Base width of each item */
  max-width: 400px; /* Maximum width to ensure items are not too wide */
}

.card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  padding-bottom: 66.25%; /* Maintain a 16:9 aspect ratio */
}

.snapshot-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.card-info {
  padding: 10px;
  background-color: #f8f9fa;
  border-top: 1px solid #dee2e6;
  border-radius: 0 0 10px 10px;
}

/* Media queries for responsive design */
@media (min-width: 576px) {
  .work-item {
    width: 60%; /* Adjust width for larger screens */
  }
}

@media (min-width: 768px) {
  .work-item {
    width: 50%; /* Adjust width for larger screens */
  }
}

@media (min-width: 992px) {
  .work-item {
    width: 33.33%; /* Adjust width for larger screens */
  }
}

@media (min-width: 1200px) {
  .work-item {
    width: 25%; /* Adjust width for even larger screens */
  }
}
</style>
