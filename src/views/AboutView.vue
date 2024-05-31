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
.about {
  min-height: 80vh;

  text-align: center;
}

.members {
  display: flex;
  justify-content: space-around;
}

.member {
  margin: 20px;
}

.member img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.member a {
  display: block;
  margin-top: 10px;
}

.college-logo img {
  margin-top: 20px;
  width: 300px; /* Increase the width for a larger logo */
}
</style>
