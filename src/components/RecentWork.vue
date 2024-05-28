<template>
  <div class="component-container">
    <h2>Check out your recent actions</h2>
    <p class="description">Here you can find the most recent updates and activities you've performed.</p>
    <div v-if="loading" class="loading">Loading recent actions...</div>
    <div v-else ref="scrollContainer" class="recent-works-container">
      <div class="work-items-wrapper">
        <div v-for="work in recents" :key="work.id" class="work-item">
          <router-link :to="`/dashboard/recents/${work.id}`">
            <div class="card">
              <img :src="work.templateData.snapshot" alt="Snapshot of the component" class="snapshot-img">
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <p class="footer-text">Scroll horizontally to see more actions</p>
  </div>
</template>

<script>
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';
import { getRecentChanges } from '../composables/useFirestore.js';
import getUser from '@/composables/getUser.js';

export default {
  name: 'RecentWork',
  data() {
    return {
      recents: [],
      scrollbar: null,
      loading: true
    };
  },
  async mounted() {
    const { user } = getUser();
    const userId = user.value.uid;
    try {
      this.recents = await getRecentChanges(userId);
      this.loading = false;
      this.$nextTick(() => {
        if (this.$refs.scrollContainer) {
          this.scrollbar = new PerfectScrollbar(this.$refs.scrollContainer, { suppressScrollY: true });
        }
      });
    } catch (error) {
      console.error('Error fetching recent changes:', error);
      this.loading = false;
    }
  },
  beforeDestroy() {
    if (this.scrollbar) {
      this.scrollbar.destroy();
    }
  }
};
</script>

<style scoped>
.component-container {
  background-color: #213555;
  text-align: center;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #213555;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 20px auto;
}

h2 {
  color: #E5D283;
  font-size: 24px;
  margin-bottom: 10px;
}

.description {
  color: #ffffff;
  margin-bottom: 20px;
}

.loading {
  color: #E5D283;
  font-size: 18px;
}

.recent-works-container {
  position: relative;
  overflow: hidden;
  height: 260px;
}

.work-items-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 10px;
}

.work-items-wrapper::-webkit-scrollbar {
  display: none;
}

.work-items-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.work-item {
  flex: 0 0 300px;
  margin-right: 10px;
}

.card {
  width: 100%;
  height: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.snapshot-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.footer-text {
  color: #ffffff;
  margin-top: 20px;
}
</style>
