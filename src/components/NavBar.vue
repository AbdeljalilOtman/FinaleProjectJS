<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
    <div class="container-fluid">
      <router-link class="navbar-brand d-flex align-items-center" to="/">
        <img src="/path-to-logo.png" alt="Logo" class="logo me-2"/>
        <span>ResumeBuilder</span>
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/welcome">Enter</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

.navbar {
  transition: background-color 0.3s;
  font-family: 'Nunito', sans-serif;
  padding: 0.75rem 1rem;
}

.navbar-brand {
  font-size: 1.75rem;
  display: flex;
  align-items: center;
  color: #EF962D;
}

.logo {
  width: 40px;
  height: 40px;
}

.navbar-nav .nav-item {
  margin: 0 15px;
}

.navbar-nav .nav-link {
  padding: 0.5rem 1.2rem;
  transition: background-color 0.3s, color 0.3s;
  font-weight: 700;
}

.navbar-nav .nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: #EF962D;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23EF962D' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%28100%2C 100%2C 100%2C 0.5%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}

@media (max-width: 992px) {
  .navbar-nav .nav-item {
    margin: 0 10px;
  }

  .navbar-nav .nav-link {
    padding: 0.75rem 1rem;
  }
}
</style>
