<template>
  <nav class="bg-green-800 shadow-sm">
    <div class="container mx-auto px-4 py-3 flex justify-between items-center">
      <router-link class="flex items-center space-x-2" to="/">
        <img src="@/assets/QuickCV2.png" alt="QuickCV Logo" class="h-12" />
        <span class="text-lg font-bold text-white">QuickCV</span>
      </router-link>
      <button
        class="text-white md:hidden focus:outline-none"
        @click="toggleNav"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <div :class="{'block': isNavOpen, 'hidden': !isNavOpen}" class="w-full md:flex md:items-center md:w-auto">
        <ul class="md:flex md:space-x-6 bg-green-800 md:bg-transparent">
          <li class="md:inline-block block">
            <router-link class="block py-2 px-4 text-white font-semibold hover:bg-yellow-400 hover:text-black rounded-md" to="/welcome">Get Started</router-link>
          </li>
          <li class="md:inline-block block">
            <router-link class="block py-2 px-4 text-white font-semibold hover:bg-yellow-400 hover:text-black rounded-md" to="/about">About Us</router-link>
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
  transition: background-color 0.3s;
  font-family: 'Nunito', sans-serif;
}
</style>
