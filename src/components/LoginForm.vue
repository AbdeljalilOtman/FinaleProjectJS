<template>
  <div class="flex justify-center items-center ">
    <div class="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
      <form @submit.prevent="onLogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            placeholder="Email"
            required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-600 mt-1"
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="Password"
            required
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-600 mt-1"
          />
        </div>
        <div>
          <button
            type="submit"
            :disabled="loading"
            class="w-50 bg-gradient-to-r from-orange-700 to bg-orange-600  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <span v-if="loading">Loading...</span>
            <span v-else>Login</span>
          </button>
        </div>
      </form>
      <div v-if="error" class="text-red-500 text-center mt-4">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import useLogin from '../composables/useLogin';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async onLogin() {
      const { error,login } = useLogin();
      error.value = null;
      try {
        await login(this.email, this.password);
        if (!error.value) {
          console.log('Login successful');
          this.$emit('login');
        }
      } catch (err) {
        console.error('Error during login:', err);
        error.value = err.message;
        alert("Wrong email or password");
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
