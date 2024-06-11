<template>
  <div class="flex justify-center items-center">
    <div class="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
      <form @submit.prevent="handleSignUp" class="space-y-6">
        <div>
          <label for="FullName" class="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            id="FullName"
            required
            placeholder="Full Name"
            v-model="FullName"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-600 mt-1"
          />
        </div>
        <div>
          <label for="BirthDate" class="block text-sm font-medium text-gray-700">Birth Date</label>
          <input
            type="date"
            id="BirthDate"
            required
            placeholder="Your Birth Date"
            v-model="BirthDate"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-600 mt-1"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Your Email"
            v-model="email"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-600 mt-1"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            required
            placeholder="Your Password"
            v-model="password"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-600 mt-1"
          />
        </div>
        <div>
          <button
            type="submit"
            :disabled="loading"
            class="w-50 bg-gradient-to-r from-orange-700 to bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <span v-if="loading">Signing Up...</span>
            <span v-else>Sign Up</span>
          </button>
        </div>
        <div v-if="error" class="text-red-500 text-center mt-4">
          {{ error }}
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import useSignup from '@/composables/useSignup';
  
  export default {
    data() {
      return {
        FullName: '',
        BirthDate: '',
        email: '',
        password: '',
        error: null,
      };
    },
    methods: {
      async handleSignUp() {
        const { signup, error } = useSignup();
        this.error = null;
        try {
          await signup(this.email, this.password, this.FullName, this.BirthDate);
          if (!error.value) {
            console.log('Signup successful');
            this.$emit('signup');
          } else {
            this.error = error.value;
          }
        } catch (err) {
          console.error('Error during signup:', err);
          this.error = err.message;
        }
      },
    },
  };

</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>
