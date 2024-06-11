<template>
  <div :class="{'app': showSidebar !== -1 && showSidebar, 'default': showSidebar === -1 || !showSidebar}">
    <!-- Conditional rendering of SidePanel or NavBar based on user authentication -->
    <NavBar v-if="showSidebar !== -1 && !showSidebar" style="display: block;" />

    <!-- Main content area -->
    <div class="content">
      <SideBar v-if="showSidebar !== -1 && showSidebar" />

      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import SideBar from './components/SideBar.vue';
import Footer from './components/Footer.vue';

import { getCurrentUser } from './router/index.js'; // Correct the import path if necessary

export default {
  name: 'App',
  components: {
    NavBar,
    SideBar,
    Footer
  },
  data() {
    return {
      showSidebar: -1
    };
  },
  async created() {
    const currentUser = await getCurrentUser();
    this.showSidebar = !!currentUser;
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
  --primary: #f17421;
  --primary-alt: #22c55e;
  --grey: #f17421;
  --dark: #2563eb;
  --darkk : #374151
  --dark-alt: #F1D6AB;
  --light: #ffffff;
  --sidebar-width: 300px;
}

.default {
  background-color:white;
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
  .content {
    display: flex;
  }

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
</style>
