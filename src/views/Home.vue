<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-center text-4xl font-bold text-gray-800 mb-8">
      Welcome to <span class="text-orange-600">QuickCV</span>
    </h1>

    <div class="first flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-600 to-gray-800 rounded-lg shadow-lg mb-16 p-8 w-full">
      <img class="banner w-full md:w-2/5 rounded-lg mb-8 md:mb-0" src="../assets/banner.jpg" alt="banner">

      <div class="text-section text-white md:ml-8">
        <p class="mb-6 text-lg">
          QuickCV is designed to help you create professional resumes with ease.
          <br>
          Start crafting your perfect resume today!
        </p>
        <button @click="getStarted" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105">
          Get Started
        </button>
      </div>
    </div>

    <div class="how-to-get-started text-center">
      <h2 class="text-3xl font-semibold text-gray-800 mb-8">
        How to get started with QuickCV:
      </h2>
      <ol class="flex flex-col md:flex-row justify-around">
        <li class="step flex flex-col items-center mb-8 md:mb-0">
          <div class="step-icon bg-orange-600 text-white hover:bg-orange-700 text-3xl w-20 h-20 rounded-full flex items-center justify-center mb-4">
            1
          </div>
          <div class="step-text text-center">
            <h3 class="text-xl font-bold text-blue-600 mb-2">Create an account</h3>
            <p class="text-gray-700">Sign up easily to get started.</p>
          </div>
        </li>
        <li class="step flex flex-col items-center mb-8 md:mb-0">
          <div class="step-icon bg-orange-600 text-white text-3xl hover:bg-orange-700 w-20 h-20 rounded-full flex items-center justify-center mb-4">
            2
          </div>
          <div class="step-text text-center">
            <h3 class="text-xl font-bold text-blue-600 mb-2">Choose a template</h3>
            <p class="text-gray-700">Select from a variety of professional templates.</p>
          </div>
        </li>
        <li class="step flex flex-col items-center mb-8 md:mb-0">
          <div class="step-icon bg-orange-600 text-white hover:bg-orange-700 text-3xl w-20 h-20 rounded-full flex items-center justify-center mb-4">
            3
          </div>
          <div class="step-text text-center">
            <h3 class="text-xl font-bold text-blue-600 mb-2">Fill the template</h3>
            <p class="text-gray-700">Enter your details to customize your CV.</p>
          </div>
        </li>
        <li class="step flex flex-col items-center">
          <div class="step-icon bg-orange-600 text-white hover:bg-orange-700 text-3xl w-20 h-20 rounded-full flex items-center justify-center mb-4">
            4
          </div>
          <div class="step-text text-center">
            <h3 class="text-xl font-bold text-blue-600 mb-2">Export</h3>
            <p class="text-gray-700">Download your CV as a PDF.</p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    getStarted() {
      // Implement navigation logic or a function to guide users on how to get started
      this.$router.push('/welcome');
    }
  }
};
</script>

<style scoped>
.first {
  transition: transform 0.5s, box-shadow 0.3s;
  width: 100%;
}

.first:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}

.step-icon {
  transition: background-color 0.3s, transform 0.3s;
}

.step-icon:hover {
  transform: scale(1.1);
}
</style>
