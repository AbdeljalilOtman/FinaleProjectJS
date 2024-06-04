<template>
  <div class="about">
    <h1>About Us</h1>
    <div class="members">
      <div class="member">
        <img src="../assets/youness_photo.jpeg" alt="Youness Anouar">
        <h2>Youness Anouar</h2>
        <p>Second-year student at Mohammed VI Polytechnic University - College Of Computing</p>
        <a href="https://ma.linkedin.com/in/youness-anouar-129681231?trk=public_profile_samename-profile">LinkedIn Profile</a>
      </div>
      <div class="member">
        <img src="../assets/abdeljalil_otman.jpg" alt="Abdeljalil Otman">
        <h2>Abdeljalil Otman</h2>
        <p>Second-year student at Mohammed VI Polytechnic University - College Of Computing</p>
        <a href="https://www.linkedin.com/in/abdeljalil-otman/">LinkedIn Profile</a>
      </div>
    </div>
    <div class="college-logo">
      <img src="https://cc.um6p.ma/assets/images/logo-cc-v2.png" alt="College of Computing Logo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

.about {
  min-height: 80vh;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  padding: 40px 20px;
  background-color: #f8f9fa;
}

h1 {
  font-size: 2.5rem;
  color: #A0855B;
  margin-bottom: 40px;
}

.members {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.member {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  text-align: center;
  width: 250px;
}

.member:hover {
  transform: translateY(-10px);
}

.member img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
}

.member h2 {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
}

.member p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
}

.member a {
  display: block;
  font-weight: 700;
  color: #38470B;
  text-decoration: none;
  margin-top: 10px;
}

.member a:hover {
  text-decoration: underline;
}

.college-logo {
  margin-top: 50px;
}

.college-logo img {
  width: 300px;
  height: auto;
}
</style>
