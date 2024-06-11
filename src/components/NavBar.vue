<template>
  <nav class="bg-gradient-to-r from-white to-blue-600 shadow-sm relative">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <router-link class="flex items-center space-x-2" to="/">
        <img src="@/assets/QuickCV2.png" alt="QuickCV Logo" class="h-12" />
        <span class="text-lg font-bold text-orange-600 fs-3">QuickCV</span>
      </router-link>


      <div class="block bg-blue-600 space-x-6">
        <ul class="flex">
          <li>
            <router-link class="block py-2 px-4 text-white font-semibold hover:bg-gray-800 hover:text-black rounded-md" to="/welcome">Get Started</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isNavOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

.navbar {
  font-family: 'Nunito', sans-serif;
  transition: background-color 0.3s;
}
</style>
