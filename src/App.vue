<template>
  <div id="app">
    <NavBar v-if="$route.path.startsWith('/dashboard')" />

    <nav v-else class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">ResumeBuilder</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/welcome">Login/Sign Up</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Us</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <RouterView/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
};
</script>

<style scoped>
.navbar-brand {
  font-size: 1.5rem;
  padding-left: 20px; /* Increase padding for better alignment */
}

.navbar-nav .nav-item {
  margin: 0 10px; /* Equal distance between each nav item */
}

.navbar-nav .nav-link {
  padding: 0.5rem 1rem; /* Adjust padding for better visual appearance */
}

.navbar-nav .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Add hover effect */
}
</style>
