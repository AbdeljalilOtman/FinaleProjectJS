<template>
  <div class="template-content">
    <div ref="componentContainer" class="container">
      <div class="section personal-info">
        <h1>
          <input v-model="templateData.personalInfo.name" placeholder="Enter your name" />
        </h1>
        <p>
          Email: <input v-model="templateData.personalInfo.email" placeholder="Enter your email" />
        </p>
        <p>
          Phone: <input v-model="templateData.personalInfo.phone" placeholder="Enter your phone number" />
        </p>
        <p>
          Address: <input v-model="templateData.personalInfo.address" placeholder="Enter your address" />
        </p>
      </div>
      <div class="section education">
        <h2>Education</h2>
        <div>
          <h3>
            <input v-model="templateData.education.degree" placeholder="Enter your degree" />
          </h3>
          <p>
            <input v-model="templateData.education.university" placeholder="Enter your university" />
          </p>
          <p>
            Graduation Year: <input v-model="templateData.education.graduationYear" placeholder="Enter graduation year" />
          </p>
        </div>
      </div>
      <div class="section experience">
        <h2>Work Experience</h2>
        <div>
          <h3>
            <input v-model="templateData.experience.position" placeholder="Enter your position" />
          </h3>
          <p>
            <input v-model="templateData.experience.company" placeholder="Enter company name" />
          </p>
          <p>
            <input v-model="templateData.experience.dates" placeholder="Enter start and end date" />
          </p>
          <ul>
            <li v-for="(responsibility, index) in templateData.experience.responsibilities" :key="index">
              <input v-model="templateData.experience.responsibilities[index]" placeholder="Enter a responsibility" />
            </li>
          </ul>
        </div>
      </div>
      <div class="section skills">
        <h2>Skills</h2>
        <div>
          <span v-for="(skill, index) in templateData.skills" :key="index" class="skill">
            <input v-model="templateData.skills[index]" placeholder="Enter a skill" />
          </span>
        </div>
      </div>
    </div>
    <div class="section">
      <button @click="saveAllChanges" class="save-button">Save Changes</button>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Template1',
  props: {
    initial: {
      type: Object,
      default: () => ({}),
      required: false
    }
  },
  data() {
    return {
      templateData : {
          personalInfo: {
            name: this.initial.personalInfo?.name || 'John Doe',
            email: this.initial.personalInfo?.email || 'john@example.com',
            phone: this.initial.personalInfo?.phone || '+1 123 456 7890',
            address: this.initial.personalInfo?.address || '123 Main Street, City, Country'
          },
          education: {
            degree: this.initial.education?.degree || 'Bachelor of Science in Computer Science',
            university: this.initial.education?.university || 'University Name, City, Country',
            graduationYear: this.initial.education?.graduationYear || '20XX'
          },
          experience: {
            position: this.initial.experience?.position || 'Software Engineer',
            company: this.initial.experience?.company || 'Company Name, City, Country',
            dates: this.initial.experience?.dates || 'Start Date - End Date',
            responsibilities: this.initial.experience?.responsibilities || ['Responsibility 1', 'Responsibility 2', 'Responsibility 3']
          },
          skills: this.initial.skills || ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'React', 'Node.js'],
          snapshot: ''
      }

    };
  },
  methods: {
     saveAllChanges() {
      const userId = 'currentUser'; // This should be dynamically set
      const templateID = 1;
      const templateData = [userId, templateID, {
            personalInfo: this.templateData.personalInfo,
            education: this.templateData.education,
            experience: this.templateData.experience,
            skills: this.templateData.skills,
            snapshot: '' // Pass snapshot data to saveChange function
        }];
      this.$emit('saveChanges', templateData);

    }


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

.save-button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
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
