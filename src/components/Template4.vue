<template>
    <saveBar @save="saveAllChanges" @exportAsPDF="exportAsPDF" @editProfPic="editProfPic"/>
    <div class="p-1 bg-gray-100 rounded-lg shadow-lg" id="template">
    <div class="flex">
      <!-- Left Column -->
      <div class="w-2/5 p-4 bg-gray-800 text-white rounded-lg">
        <div class="flex items-center space-x-4 mb-6">
          <img :src="templateData.personalInfo.profilePicture" alt="Profile Picture" class="w-24 h-24 rounded-full shadow-md" />
          <div>
            <h1 class="text-3xl font-bold">
              <textarea v-model="templateData.personalInfo.name" placeholder="Enter your name" class="w-full bg-transparent border-none focus:outline-none text-white auto-resize"></textarea>
            </h1>
            <p class="text-xl text-gray-300">
              <textarea v-model="templateData.jobTitle" placeholder="Enter your job title" class="w-full bg-transparent border-none focus:outline-none text-gray-300 auto-resize"></textarea>
            </p>
          </div>
        </div>
        <div class="mt-4 mb-6">
          <h2 class="text-2xl font-semibold border-b pb-2 border-gray-400">Contact Info</h2>
          <p class="text-sm mt-2">
            <textarea v-model="templateData.personalInfo.contactInfo" placeholder="Enter your contact info" class="w-full bg-transparent border-none focus:outline-none text-white auto-resize"></textarea>
          </p>
        </div>
        <div class="mt-8">
          <h2 class="text-2xl font-semibold border-b pb-2 text-gray-400">Skills</h2>
          <div class="mt-4">
            <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
              <div v-for="(skill, index) in templateData.skills" :key="index" class="flex items-center mt-2">
                <textarea v-model="templateData.skills[index]" placeholder="Enter a skill" class="w-full bg-transparent border-none focus:outline-none text-white auto-resize"></textarea>
                <font-awesome-icon icon="xmark" @click="removeSkill(index)" size="lg" class="text-red-500 hover:underline ml-2 cursor-pointer icon hover:animate-ping"/>
              </div>
            </draggable>
            <font-awesome-icon icon="plus" @click="addSkill" class="mt-4 text-white hover:underline icon flex justify-center cursor-pointer transition-transform duration-300 hover:animate-spin"/>
          </div>
        </div>
        <div class="mt-8">
          <h2 class="text-2xl font-semibold border-b pb-2 text-gray-400">Languages</h2>
          <div class="mt-4">
            <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
              <div v-for="(language, index) in templateData.languages" :key="index" class="flex items-center mt-2">
                <textarea v-model="templateData.languages[index]" placeholder="Enter a language" class="w-full bg-transparent border-none focus:outline-none text-white auto-resize"></textarea>
                <font-awesome-icon icon="xmark" @click="removeLanguages(index)" size="lg" class="text-red-500 hover:underline ml-2 cursor-pointer icon hover:animate-ping"/>
              </div>
            </draggable>
            <font-awesome-icon icon="plus" @click="addLanguages" class="mt-4 text-white hover:underline icon flex justify-center cursor-pointer transition-transform duration-300 hover:animate-spin"/>
          </div>
        </div>
        <div class="mt-8">
          <h2 class="text-2xl font-semibold border-b pb-2 text-gray-400">Others</h2>
          <div class="mt-4">
            <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
              <div v-for="(other, index) in templateData.Others" :key="index" class="flex items-center mt-2">
                <textarea v-model="templateData.Others[index]" placeholder="Enter other information" class="w-full bg-transparent border-none focus:outline-none text-white auto-resize"></textarea>
                <font-awesome-icon icon="xmark" @click="removeOther(index)" size="lg" class="text-red-500 hover:underline ml-2 cursor-pointer icon hover:animate-ping"/>
              </div>
            </draggable>
            <font-awesome-icon icon="plus" @click="addOther" class="mt-4 text-white hover:underline icon flex justify-center cursor-pointer transition-transform duration-300 hover:animate-spin"/>
          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="w-3/5 p-2 bg-gray-200 rounded-lg">
        <div class="mt-8 mb-6">
          <h2 class="text-2xl font-semibold border-b pb-2 text-gray-900">Profile</h2>
          <textarea v-model="templateData.profile" placeholder="Enter your profile" class="w-full mt-4 bg-transparent border-none focus:outline-none text-gray-900 auto-resize"></textarea>
        </div>
        <div class="mt-8 mb-6">
          <h2 class="text-2xl font-semibold border-b pb-2 text-gray-900">Experience</h2>
          <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
            <div v-for="(experience, index) in templateData.experiences" :key="index" class="mt-4 border-b pb-4 border-gray-300">
              <h3 class="text-xl font-semibold text-gray-900">
                <textarea v-model="experience.jobTitle" placeholder="Enter job title" class="w-full bg-transparent border-none focus:outline-none text-gray-900 auto-resize"></textarea>
              </h3>
              <p class="text-sm text-gray-600">
                <textarea v-model="experience.company" placeholder="Enter company" class="w-full bg-transparent border-none focus:outline-none text-gray-600 auto-resize"></textarea>
                -
                <textarea v-model="experience.period" placeholder="Enter period" class="w-full bg-transparent border-none focus:outline-none text-gray-600 auto-resize"></textarea>
              </p>
              <textarea v-model="experience.description" placeholder="Enter job description" class="w-full mt-2 bg-transparent border-none focus:outline-none text-gray-900 auto-resize"></textarea>
              <font-awesome-icon icon="circle-xmark" size="xl" @click="removeExperience(index)" class="text-red-500 hover:underline ml-2 cursor-pointer icon hover:animate-ping"/>
            </div>
          </draggable>
          <font-awesome-icon icon="circle-plus" @click="addExperience" size="xl" class="mt-4 text-gray-900 hover:underline icon flex justify-center cursor-pointer transition-transform duration-300 hover:animate-spin"/>
        </div>
        <div class="mt-8">
          <h2 class="text-2xl font-semibold border-b pb-2 text-gray-900">Education</h2>
          <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
            <div v-for="(education, index) in templateData.education" :key="index" class="mt-4 border-b pb-4 border-gray-300">
              <h3 class="text-xl font-semibold text-gray-900">
                <textarea v-model="education.degree" placeholder="Enter degree" class="w-full bg-transparent border-none focus:outline-none text-gray-900 auto-resize"></textarea>
              </h3>
              <p class="text-sm text-gray-600">
                <textarea v-model="education.institution" placeholder="Enter institution" class="w-full bg-transparent border-none focus:outline-none text-gray-600 auto-resize"></textarea>
                -
                <textarea v-model="education.period" placeholder="Enter period" class="w-full bg-transparent border-none focus:outline-none text-gray-600 auto-resize"></textarea>
              </p>
              <textarea v-model="education.description" placeholder="Enter description" class="w-full mt-2 bg-transparent border-none focus:outline-none text-gray-900 auto-resize"></textarea>
              <font-awesome-icon icon="circle-xmark" size="xl" @click="removeEducation(index)" class="text-red-500 hover:underline ml-2 cursor-pointer icon hover:animate-ping"/>
            </div>
          </draggable>
          <font-awesome-icon icon="circle-plus" @click="addEducation" size="xl" class="mt-4 text-gray-900 hover:underline icon flex justify-center cursor-pointer transition-transform duration-300 hover:animate-spin"/>
        </div>
      </div>
    </div>
  </div>
  </template>
    
  <script>
  import Draggable from 'vue-draggable-next';
  import { VueDraggableNext } from 'vue-draggable-next';
  import saveBar from './saveBar.vue';
  
  export default {
    name: 'Template4',
    components: {
      Draggable,
        saveBar,
      draggable: VueDraggableNext,
    },
    props: {
      initial: {
        type: Object,
        default: () => ({
          personalInfo: {
            profilePicture: 'https://via.placeholder.com/150',
            name: 'John Doe',
            contactInfo: 'john@example.com',
          },
          jobTitle: 'Software Engineer',
          profile: 'An experienced software engineer...',
          experiences: [
            { jobTitle: 'Senior Software Engineer', company: 'Tech Corp', period: '2019 - Present', description: 'Developed and implemented software solutions that improved operations by 20%.' },
          ],
          education: [
            { degree: 'B.S. in Computer Science', institution: 'University of Technology', period: '2011 - 2015', description: 'Graduated with honors and a focus in software engineering.' }
          ],
          skills: ['JavaScript'],
          languages: ['French'],
          Others: ['karate']
        }),
        required: false
      }
    },
    data() {
      return {
        templateData: {
          ...this.initial
        },
      }
    },
    methods: {
      addSkill() {
        this.templateData.skills.push('');
      },
      addLanguages() {
        this.templateData.languages.push('');
      },
      addOther() {
        this.templateData.Others.push('');
      },
      removeSkill(index) {
        this.templateData.skills.splice(index, 1);
      },
      removeLanguages(index) {
        this.templateData.languages.splice(index, 1);
      },
      removeOther(index) {
        this.templateData.Others.splice(index, 1);
      },
      autoResize(textarea) {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      },
      addExperience() {
        this.templateData.experiences.push({
          jobTitle: '',
          company: '',
          period: '',
          description: ''
        });
        // Call the auto-resize function after adding new experiences
        this.$nextTick(() => {
          const textareas = document.querySelectorAll('.auto-resize');
          textareas.forEach(textarea => {
            this.autoResize(textarea);
            textarea.addEventListener('input', () => this.autoResize(textarea));
          });
        });
      },
      addEducation() {
        this.templateData.education.push({
          degree: '',
          institution: '',
          period: '',
          description: ''
        });
        // Call the auto-resize function after adding new education
        this.$nextTick(() => {
          const textareas = document.querySelectorAll('.auto-resize');
          textareas.forEach(textarea => {
            this.autoResize(textarea);
            textarea.addEventListener('input', () => this.autoResize(textarea));
          });
        });
      },
      removeEducation(index) {
        this.templateData.education.splice(index, 1);
      },
      removeExperience(index) {
        this.templateData.experiences.splice(index, 1);
      },
      saveAllChanges() {
        const templateID = 4;
        this.$emit('saveChanges', [templateID, this.templateData]);
      },
      editProfPic(pic){
        this.templateData.personalInfo.profilePicture=pic;
      },
      exportAsPDF(){
        const templateID = 4;
        this.$emit('exportAsPDF',[templateID, this.templateData]);
      }
    },
    mounted() {
      // Auto-resize textareas on input
      const autoResize = (textarea) => {
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      };
      this.$nextTick(() => {
        const textareas = document.querySelectorAll('.auto-resize');
        textareas.forEach(textarea => {
          autoResize(textarea);
          textarea.addEventListener('input', () => autoResize(textarea));
        });
      });
    }
  }
  </script>
  <style>
  
  .Editor{
    z-index: 1;
  }
  
  #Fdiv {
    background-color: #f9f9f9; /* Light white background */
    padding: 10%;
    z-index: 1;
    width: 300px;
    margin-left: 5%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added shadow */
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Arial', sans-serif;
    line-height: 24px;
    background: #f9f9f9; /* Light white background */
    color: #000000; /* Black text color */
  }
  
  .Draggable {
    display: flex;
    justify-content: flex-start;
  }
  
  .line {
    border: 2px solid #555;
  }
  
  template {
    margin-left: 1000px;
  }
  
  .clear {
    clear: both;
  }
  
  #template {
    width: 800px;
    margin: 40px auto 60px;
    display: flex;
    background: #f9f9f9; /* Light white background */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Added shadow */
    color: #000000; /* Black text color */
  }
  
  #pic {
    float: right;
    margin: -30px 0 0 0;
  }
  
  h1 {
    margin: 0 0 16px 0;
    padding: 0 0 16px 0;
    font-size: 42px;
    font-weight: bold;
    letter-spacing: -2px;
    border-bottom: 1px solid #555;
    color: #000; /* Black text color */
  }
  
  h2 {
    font-size: 20px;
    margin: 0 0 6px 0;
    position: relative;
    color: #000; /* Black text color */
  }
  
  h2 span {
    position: absolute;
    bottom: 0;
    right: 0;
    font-style: italic;
    font-family: 'Georgia', serif;
    font-size: 16px;
    color: #666; /* Slightly darker text color */
    font-weight: normal;
  }
  
  p {
    margin: 0 0 16px 0;
    color: #000; /* Black text color */
  }
  
  a {
    color: #000; /* Black text color */
    text-decoration: none;
    border-bottom: 1px dotted #000; /* Black text color */
  }
  
  a:hover {
    border-bottom-style: solid;
    color: #555;
  }
  
  ul {
    margin: 0 0 32px 17px;
  }
  
  #objective {
    width: 500px;
    float: left;
  }
  
  #objective p {
    font-family: 'Georgia', serif;
    font-style: italic;
    color: #666; /* Slightly darker text color */
  }
  
  dt {
    font-style: italic;
    font-weight: bold;
    font-size: 18px;
    text-align: right;
    padding: 0 26px 0 0;
    width: 150px;
    float: left;
    height: 100px;
    border-right: 1px solid #999;
  }
  
  dd {
    width: 600px;
    float: right;
  }
  
  dd.clear {
    float: none;
    margin: 0;
    height: 15px;
  }
  
  .button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    position: fixed;
    bottom: 10px;
    width: 100%;
  }
  
  .save-button {
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 4px;
    background-color: rgba(40, 40, 40, 0.8);
    cursor: pointer;
  }
  
  .save-button:hover {
    background-color: #555;
  }
  
    </style>
    