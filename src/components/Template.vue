<template>
  <div class="resume-container">
    <div class="header">
      <img src="path/to/your/image.jpg" alt="Profile Picture" class="profile-pic" />
      <div class="contact-info">
        <h1 @click="editField('name')">
          <span v-if="!edit.name">{{ resume.name }}</span>
          <input v-else type="text" v-model="resume.name" @keydown.enter="saveField('name')" />
        </h1>
        <p @click="editField('subtitle')">
          <span v-if="!edit.subtitle">{{ resume.subtitle }}</span>
          <input v-else type="text" v-model="resume.subtitle" @keydown.enter="saveField('subtitle')" />
        </p>
        <div class="contact-details">
          <p @click="editField('email')">
            <span v-if="!edit.email"><span>Email:</span> {{ resume.email }}</span>
            <input v-else type="text" v-model="resume.email" @keydown.enter="saveField('email')" />
          </p>
          <p @click="editField('phone')">
            <span v-if="!edit.phone"><span>Phone:</span> {{ resume.phone }}</span>
            <input v-else type="text" v-model="resume.phone" @keydown.enter="saveField('phone')" />
          </p>
          <p @click="editField('location')">
            <span v-if="!edit.location"><span>Location:</span> {{ resume.location }}</span>
            <input v-else type="text" v-model="resume.location" @keydown.enter="saveField('location')" />
          </p>
          <p @click="editField('website')">
            <span v-if="!edit.website"><span>Website:</span> {{ resume.website }}</span>
            <input v-else type="text" v-model="resume.website" @keydown.enter="saveField('website')" />
          </p>
          <p @click="editField('instagram')">
            <span v-if="!edit.instagram"><span>Instagram:</span> {{ resume.instagram }}</span>
            <input v-else type="text" v-model="resume.instagram" @keydown.enter="saveField('instagram')" />
          </p>
        </div>
      </div>
    </div>

    <draggable class="dragArea list-group w-full" :list="list" @change="log">
  <div
    class="list-styles"
    v-for="element in list"
    :key="element.name"
  >
    
    -------------
    <br>
    {{ element.name }}
    {{ element.Content }}
    <br>
    ----------------------
    <br>
  </div>
</draggable>
  </div>
</template>

<script>
import Draggable from 'vue-draggable-next';
import WorkExperience from './WorkExperience.vue';
import Education from './Education.vue';
import { defineComponent } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

export default {
  components: {
    Draggable,
    WorkExperience,
    Education,
    draggable: VueDraggableNext,
  },
  data() {
    return {
      resume: {
        name: 'Jane Doe',
        subtitle: 'Junior Architect',
        email: 'jane.doe@gmail.com',
        phone: '920-119 44 512',
        location: 'Copenhagen',
        website: 'jane-doe.com',
        instagram: 'instagram.com/jane.doe'
      },
      edit: {
        name: false,
        subtitle: false,
        email: false,
        phone: false,
        location: false,
        website: false,
        instagram: false
      },enabled: true,
  list: [
    { 
      "name": "Contact Information", 
      "id": 1, 
      "Content": "John Doe\n1234 Elm Street\nAnytown, State, ZIP\nEmail: john.doe@example.com\nPhone: (123) 456-7890\nLinkedIn: linkedin.com/in/johndoe"
    },
    { 
      "name": "Professional Summary", 
      "id": 2, 
      "Content": "Dynamic and results-oriented professional with over 10 years of experience in software development and project management. Proven track record of delivering high-quality software solutions on time and within budget. Adept at collaborating with cross-functional teams to drive business objectives and enhance operational efficiency. Seeking to leverage extensive technical expertise and leadership skills in a challenging role at a forward-thinking organization."
    },
    { 
      "name": "Professional Experience", 
      "id": 3, 
      "Content": "Senior Software Engineer\nTech Solutions Inc., Anytown, State\nJanuary 2015 – Present\n\n- Led a team of 10 software engineers in the design, development, and deployment of enterprise-level applications, resulting in a 30% increase in customer satisfaction.\n- Spearheaded the adoption of Agile methodologies, improving project delivery timelines by 25%.\n- Developed and implemented a continuous integration and continuous deployment (CI/CD) pipeline, reducing deployment times by 40%.\n- Collaborated with product managers and stakeholders to define project requirements and deliverables.\n\nSoftware Engineer\nInnovative Tech Corp., Anytown, State\nJune 2010 – December 2014\n\n- Designed and developed web applications using Java, Spring Boot, and Angular, resulting in a 20% increase in user engagement.\n- Participated in code reviews and mentored junior developers, fostering a culture of continuous improvement.\n- Implemented RESTful APIs to enhance application functionality and improve data integration with third-party services.\n- Conducted performance tuning and optimization, reducing application load times by 15%."
    },
    { 
      "name": "Education", 
      "id": 4, 
      "Content": "Bachelor of Science in Computer Science\nUniversity of Anytown, State\nGraduated: May 2010"
    },
    { 
      "name": "Skills", 
      "id": 5, 
      "Content": "Programming Languages: Java, Python, JavaScript, SQL\nFrameworks and Technologies: Spring Boot, Angular, React, Node.js\nTools: Git, Jenkins, Docker, Kubernetes\nMethodologies: Agile, Scrum, DevOps\nSoft Skills: Leadership, Communication, Problem-solving, Team Collaboration"
    },
    { 
      "name": "Certifications", 
      "id": 6, 
      "Content": "Certified Scrum Master (CSM)\nOracle Certified Professional, Java SE 8 Programmer\nAWS Certified Solutions Architect"
    },
    { 
      "name": "Projects", 
      "id": 7, 
      "Content": "E-commerce Platform Development\n- Led the development of a scalable e-commerce platform, integrating payment gateways, inventory management, and customer relationship management (CRM) systems.\n\nMobile Application for Health Tracking\n- Developed a cross-platform mobile application using React Native and Firebase, enabling users to track health metrics and receive personalized wellness recommendations."
    },
    { 
      "name": "References", 
      "id": 8, 
      "Content": "Available upon request."
    }
  ]
,
      dragging: false,
    };
  },
  methods: {
    editField(field) {
      this.edit[field] = true;
    },
    saveField(field) {
      this.edit[field] = false;
    }
  }
};
</script>

<style scoped>
.resume-container {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fff;
}

.header {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #000;
  padding-bottom: 20px;
  margin-bottom: 20px;
}

.profile-pic {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-right: 20px;
}

.contact-info {
  flex-grow: 1;
}

.contact-info h1, .contact-info p, .contact-details p {
  margin: 5px 0;
  cursor: pointer;
}

.contact-info input, .contact-details input {
  width: 100%;
  font-size: 1em;
}

.contact-details span {
  font-weight: bold;
}

.section {
  margin-bottom: 20px;
}

.section h2 {
  background: #000;
  color: #fff;
  padding: 5px;
  margin: 0;
}

.skills-list, .technical-skills-list, .languages-list, .interests-list {
  list-style-type: none;
  padding: 0;
}

.skills-list li, .technical-skills-list li, .languages-list li, .interests-list li {
  margin: 5px 0;
  cursor: pointer;
}

.skills-list input, .technical-skills-list input, .languages-list input, .interests-list input {
  width: 100%;
}
</style>
