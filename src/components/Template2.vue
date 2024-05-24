<template>
    <div class="template-content container mt-4 p-3 border rounded bg-light">
      <div class="personal-info mb-4">
        <h1 class="text-primary">
          <input v-model="personalInfo.name" class="form-control form-control-lg" placeholder="Enter your name" />
        </h1>
        <p>
          <strong>Email:</strong> <input v-model="personalInfo.email" class="form-control" placeholder="Enter your email" />
        </p>
        <p>
          <strong>Phone:</strong> <input v-model="personalInfo.phone" class="form-control" placeholder="Enter your phone number" />
        </p>
        <p>
          <strong>Address:</strong> <input v-model="personalInfo.address" class="form-control" placeholder="Enter your address" />
        </p>
      </div>
      <div class="education mb-4">
        <h2 class="text-secondary">Education</h2>
        <div>
          <h3>
            <input v-model="education.degree" class="form-control" placeholder="Enter your degree" />
          </h3>
          <p>
            <input v-model="education.university" class="form-control" placeholder="Enter your university" />
          </p>
          <p>
            <strong>Graduation Year:</strong> <input v-model="education.graduationYear" class="form-control" placeholder="Enter graduation year" />
          </p>
        </div>
      </div>
      <div class="experience mb-4">
        <h2 class="text-secondary">Work Experience</h2>
        <div>
          <h3>
            <input v-model="experience.position" class="form-control" placeholder="Enter your position" />
          </h3>
          <p>
            <input v-model="experience.company" class="form-control" placeholder="Enter company name" />
          </p>
          <p>
            <input v-model="experience.dates" class="form-control" placeholder="Enter start and end date" />
          </p>
          <ul class="list-group">
            <li v-for="(responsibility, index) in experience.responsibilities" :key="index" class="list-group-item">
              <input v-model="experience.responsibilities[index]" class="form-control" placeholder="Enter a responsibility" />
            </li>
          </ul>
        </div>
      </div>
      <div class="skills mb-4">
        <h2 class="text-secondary">Skills</h2>
        <div>
          <span v-for="(skill, index) in skills" :key="index" class="badge bg-secondary m-1">
            <input v-model="skills[index]" class="form-control bg-secondary text-white border-0" placeholder="Enter a skill" />
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Template2',
    data() {
      return {
        personalInfo: {
          name: 'Jane Smith',
          email: 'jane@example.com',
          phone: '+1 987 654 3210',
          address: '456 Another Street, City, Country'
        },
        education: {
          degree: 'Master of Science in Information Technology',
          university: 'Another University, City, Country',
          graduationYear: '20YY'
        },
        experience: {
          position: 'Senior Developer',
          company: 'Another Company, City, Country',
          dates: 'Start Date - End Date',
          responsibilities: ['Responsibility A', 'Responsibility B', 'Responsibility C']
        },
        skills: ['HTML', 'CSS', 'JavaScript', 'Ruby', 'PHP', 'Vue.js', 'Django']
      };
    }
  };
  </script>
  
  <style scoped>
  .template-content {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .personal-info h1 input,
  .education h3 input,
  .experience h3 input {
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    outline: none;
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  
  .personal-info p input,
  .education p input,
  .experience p input {
    border: none;
    border-bottom: 1px solid #ccc;
    border-radius: 0;
    outline: none;
    padding: 5px;
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  
  .skills .badge {
    display: inline-block;
    padding: 5px 10px;
  }
  
  .skills .badge input {
    border: none;
    background: none;
    color: inherit;
    outline: none;
    padding: 0;
    margin: 0;
    width: auto;
    display: inline-block;
    text-align: center;
  }
  </style>
  