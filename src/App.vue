<template>
  <div class="app">
    <!-- Conditional rendering of SidePanel or NavBar based on user authentication -->
    <SideBar v-if="showSidebar !== -1 && showSidebar" />
    <NavBar v-if="showSidebar !== -1 && !showSidebar" />
    <!-- Main content area -->
    <router-view />
  </div>
</template>


<script>
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
import { getCurrentUser } from './router/index.js';  // Correct the import path if necessary

export default {
  name: 'App',
  components: {
    NavBar,
    SideBar
  },
  data() {
    return {
      showSidebar: -1
    };
  },
  async created() {
    const currentUser = await getCurrentUser();
    this.showSidebar = !!currentUser ;
  },
  watch: {
    '$route.path': async function() {
      const currentUser = await getCurrentUser();
      this.showSidebar = !!currentUser;
    }
  }
};

</script>

<style lang="scss">
:root {
  --primary: #ded74a;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;  
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
