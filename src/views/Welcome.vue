<template>
  <div class="container mx-auto py-10 px-4">
    <h1 class="text-4xl font-bold text-center text-orange-600 mb-8">
      Start crafting your perfect resume today!
    </h1>

    <div class="welcome w-full bg-gradient-to-r from-blue-600 to-gray-800 p-8 rounded-lg shadow-lg">
      <div v-if="showLogin" class="form-container">
        <h2>Login</h2>
        <LoginForm @login="enterForum" />
        <p>No account yet? <span @click="showLogin = false" class="text-orange-600 cursor-pointer">Signup</span> instead.</p>
      </div>
      <div v-else class="form-container">
        <h2>Sign up</h2>
        <SignupForm @signup="enterForum" />
        <p>Already registered? <span @click="showLogin = true" class="text-orange-600 cursor-pointer">Login</span> instead.</p>
      </div>
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'welcome',
  components: { SignupForm, LoginForm },
  data() {
    return {
      showLogin: true
    }
  },
  methods: {
    enterForum() {
      this.$router.push('dashboard');
    }
  }
}
</script>

<style>
.container {
  text-align: center;
}

.welcome {
  min-height: 60vh;
  padding: 10vh;
  margin-top: 10vh;
  margin-bottom: 10vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: width 0.3s, padding 0.3s;
}

.form-container {
  width: 80%;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transition: width 0.3s, padding 0.3s;
}

.welcome h2 {
  margin-bottom: 20px;
  color: white;
  font-size: 2rem;
}

.welcome span {
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
}

.welcome p {
  margin-top: 1.5rem;
  color: white;
}

.toggle-form {
  margin-top: 1rem;
  font-size: 1rem;
  color: #666;
}

/* Responsive design */
@media (max-width: 768px) {
  .welcome {
    padding: 5vh;
    width: 100%;
  }

  .form-container {
    width: 100%;
    padding: 15px;
  }

  .welcome h2 {
    font-size: 1.5rem;
  }

  .toggle-form {
    font-size: 0.875rem;
  }
}

@media (max-width: 480px) {
  .welcome {
    padding: 3vh;
  }

  .form-container {
    padding: 10px;
  }

  .welcome h2 {
    font-size: 1.25rem;
  }

  .toggle-form {
    font-size: 0.75rem;
  }
}
</style>
