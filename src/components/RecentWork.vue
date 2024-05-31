<template>
  <div class="component-container">
    <h2>Check out your recent actions</h2>
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
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

.component-container {
  background: linear-gradient(150deg, #083b4f, #041f2a);
  text-align: center;
  padding: 40px;
  border-radius: 20px;
  border: 2px solid #083b4f;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 1200px;
  margin: 20px auto;
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
}

h2 {
  color: #ffffff;
  font-size: 28px;
  margin-bottom: 15px;
}

.description {
  color: #ffffff;
  margin-bottom: 25px;
  font-size: 18px;
}

.loading {
  color: #FEAE6F;
  font-size: 20px;
}

.recent-works-container {
  position: relative;
  overflow: hidden;
  height: 280px;
  border-radius: 10px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
}

.work-items-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding-bottom: 15px;
  -webkit-overflow-scrolling: touch;
}

.work-items-wrapper::-webkit-scrollbar {
  display: none;
}

.work-items-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.work-item {
  flex: 0 0 320px;
  margin-right: 15px;
}

.card {
  width: 100%;
  height: 220px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  overflow: hidden;
  background-color: #fff;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.snapshot-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.footer-text {
  color: #ffffff;
  margin-top: 25px;
  font-size: 16px;
}
</style>
