<template>
    <footer class="footer">
      <div class="container">
        <p class="footer-text">© 2024 ResumeBuilder. All Rights Reserved.</p>
        <nav class="footer-nav">
          <router-link to="/privacy">Privacy Policy</router-link>
          <router-link to="/terms">Terms of Service</router-link>
          <router-link to="/contact">Contact Us</router-link>
        </nav>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: var(--primary);
    color: var(--light);
    padding: 1rem 0;
    text-align: center;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .footer-text {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  
  .footer-nav {
    display: flex;
    gap: 1rem;
  }
  
  .footer-nav a {
    color: var(--light);
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-nav a:hover {
    color: var(--primary-alt);
  }
  </style>
  