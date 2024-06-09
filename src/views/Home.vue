<template>
  <div class="container">
    <h1>Welcome to <span style="color:#A0855B">QuickCV</span> </h1>
    <p>
      QuickCV is a user-friendly web application designed to help students create professional resumes with ease. Experience robust features like user authentication, customizable templates, dynamic editing, and various export options. All within a sleek, responsive design to enhance your resume building process. Start crafting your perfect resume today!
    </p>
    <button @click="getStarted">Get Started</button>
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
.container {
  text-align: center;
  max-width: 800px;
  min-height: 50vh;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 10vh;
  margin-bottom: 10vh;}

h1 {
  font-size: 2.8rem;
  color: #343a40;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  color: #495057;
  line-height: 1.8;
  margin-bottom: 2rem;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #38470B;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #8b5d00;
}
</style>
