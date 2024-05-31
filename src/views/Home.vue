<template>
  <div class="container mt-5">
    <h1>Welcome to ResumeBuilder</h1>
    <p>
      ResumeBuilder is a user-friendly web application designed to help students create professional resumes with ease. Our application features user authentication, customizable resume templates, dynamic editing, and export options, all within a responsive design framework. We strive to provide a seamless and efficient experience for users to build, manage, and download their resumes effortlessly.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style scoped>
.container {
  text-align: center;
  max-width: 800px;
  min-height: 80vh;

  margin: 0 auto;
}

h1 {
  font-size: 2.5rem;
  color: #343a40;
  margin-bottom: 1rem;
}

p {
  font-size: 1.25rem;
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.mt-5 {
  margin-top: 3rem;
}
</style>
