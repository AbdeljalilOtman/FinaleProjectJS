<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ResumeBuilder</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/myresumees">My Resumes</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/dashboard/settings">Settings</router-link>
          </li>

            <button class="nav-link btn btn-link" @click="handleLogout">Logout</button>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue';
import logout  from '../composables/useLogout';
import getUser  from '@/composables/getUser';
export default {
  name: 'NavBar',
  data() {
    return {
      user: null,
    };
  },
  methods: {
    async handleLogout() {
      try {
        await logout();
        this.user = null;
        this.$router.push('/welcome');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    },
  }
};
</script>
