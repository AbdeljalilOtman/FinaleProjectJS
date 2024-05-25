<template>
    <form @submit.prevent="handleSignUp">
      <input type="text" required placeholder="Display name" v-model="displayName" />
      <input type="email" required placeholder="Your email" v-model="email" />
      <input type="password" required placeholder="Your password" v-model="password" />
      <button>Sign up</button>
      <div class="error">{{ error }}</div>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import useSignup from '@/composables/useSignup';
  
  export default {
    data() {
      return {
        displayName: '',
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
          await signup(this.email, this.password, this.displayName);
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
  
  <style>
  /* Add your styles here */
  </style>
  