<template>
  <div class="template-content">
    <div class="container">
      <div class="section personal-info">
        <h1>
          <input v-model="personalInfo.name" placeholder="Enter your name" />
        </h1>
        <p>
          Email: <input v-model="personalInfo.email" placeholder="Enter your email" />
        </p>
        <p>
          Phone: <input v-model="personalInfo.phone" placeholder="Enter your phone number" />
        </p>
        <p>
          Address: <input v-model="personalInfo.address" placeholder="Enter your address" />
        </p>
      </div>
      <div class="section education">
        <h2>Education</h2>
        <div>
          <h3>
            <input v-model="education.degree" placeholder="Enter your degree" />
          </h3>
          <p>
            <input v-model="education.university" placeholder="Enter your university" />
          </p>
          <p>
            Graduation Year: <input v-model="education.graduationYear" placeholder="Enter graduation year" />
          </p>
        </div>
      </div>
      <div class="section experience">
        <h2>Work Experience</h2>
        <div>
          <h3>
            <input v-model="experience.position" placeholder="Enter your position" />
          </h3>
          <p>
            <input v-model="experience.company" placeholder="Enter company name" />
          </p>
          <p>
            <input v-model="experience.dates" placeholder="Enter start and end date" />
          </p>
          <ul>
            <li v-for="(responsibility, index) in experience.responsibilities" :key="index">
              <input v-model="experience.responsibilities[index]" placeholder="Enter a responsibility" />
            </li>
          </ul>
        </div>
      </div>
      <div class="section skills">
        <h2>Skills</h2>
        <div>
          <span v-for="(skill, index) in skills" :key="index" class="skill">
            <input v-model="skills[index]" placeholder="Enter a skill" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Template1',
  data() {
    return {
      personalInfo: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '+1 123 456 7890',
        address: '123 Main Street, City, Country'
      },
      education: {
        degree: 'Bachelor of Science in Computer Science',
        university: 'University Name, City, Country',
        graduationYear: '20XX'
      },
      experience: {
        position: 'Software Engineer',
        company: 'Company Name, City, Country',
        dates: 'Start Date - End Date',
        responsibilities: ['Responsibility 1', 'Responsibility 2', 'Responsibility 3']
      },
      skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React', 'Node.js']
    };
  }
};
</script>

<style scoped>
.template-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  margin-top: 20px;
}

.container {
  margin: 0 auto;
  max-width: 800px;
}

.section {
  margin-bottom: 20px;
}

h1, h2, h3 {
  color: #333;
}

p, input {
  color: #666;
  background: none;
  border: none;
  outline: none;
  width: 100%;
  box-sizing: border-box;
}

.skills .skill {
  display: inline-block;
  background-color: #e0e0e0;
  border-radius: 4px;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>
