<template>
    <saveBar @save="saveAllChanges" @exportAsPDF="exportAsPDF" @editProfPic="editProfPic"/>

    <div class="p-1 bg-indigo-900 rounded-lg shadow-lg relative" id="template">
      <div class="flex">
        <!-- Left Column -->
        <div class="w-2/5 p-4 text-white">
          <div class="flex items-center space-x-4 mb-6">
            <img :src="templateData.personalInfo.profilePicture" alt="Profile Picture" class="w-24 h-24 rounded-full shadow-md" />
            <div>
              <h1 class="text-3xl font-bold">
                <textarea v-model="templateData.personalInfo.name" placeholder="Enter your name" class="w-full bg-transparent border-none focus:outline-none text-white auto-resize"></textarea>
              </h1>
              <p class="text-xl text-indigo-300">
                <textarea v-model="templateData.jobTitle" placeholder="Enter your job title" class="w-full bg-transparent border-none focus:outline-none text-white auto-resize"></textarea>
              </p>
            </div>
          </div>
          <div class="mt-4 mb-6">
            <h2 class="text-2xl font-semibold border-b pb-2 border-indigo-400">Contact Info</h2>
            <p class="text-sm mt-2">
              <textarea v-model="templateData.personalInfo.contactInfo" placeholder="Enter your contact info" class="w-full bg-transparent border-none focus:outline-none text-white auto-resize"></textarea>
            </p>
          </div>
          <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">

            <div class="mt-8">
              <h2 class="text-2xl font-semibold border-b pb-2 text-indigo-400">Skills</h2>
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
              <h2 class="text-2xl font-semibold border-b pb-2 text-indigo-400">Languages</h2>
              <div class="mt-4">
                <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
                  <div v-for="(skill, index) in templateData.languages" :key="index" class="flex items-center mt-2">
                    <textarea v-model="templateData.languages[index]" placeholder="Enter a language" class="w-full bg-transparent border-none focus:outline-none text-white auto-resize"></textarea>
                    <font-awesome-icon icon="xmark" @click="removeLanguages(index)" size="lg" class="text-red-500 hover:underline ml-2 cursor-pointer icon hover:animate-ping"/>
                  </div>
                </draggable>
                <font-awesome-icon icon="plus" @click="addLanguages" class="mt-4 text-white hover:underline icon flex justify-center cursor-pointer transition-transform duration-300 hover:animate-spin"/>
              </div>
            </div>
            <div class="mt-8">
              <h2 class="text-2xl font-semibold border-b pb-2 text-indigo-400">Hobbies</h2>
              <div class="mt-4">
                <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
                  <div v-for="(skill, index) in templateData.Hobbies" :key="index" class="flex items-center mt-2">
                    <textarea v-model="templateData.Hobbies[index]" placeholder="Enter other information" class="w-full bg-transparent border-none focus:outline-none text-white auto-resize"></textarea>
                    <font-awesome-icon icon="xmark" @click="removeOther(index)" size="lg" class="text-red-500 hover:underline ml-2 cursor-pointer icon hover:animate-ping"/>
                  </div>
                </draggable>
                <font-awesome-icon icon="plus" @click="addOther" class="mt-4 text-white hover:underline icon flex justify-center cursor-pointer transition-transform duration-300 hover:animate-spin"/>
              </div>
            </div>
          </draggable>

        </div>
  
        <!-- Right Column -->
        <div class="w-3/5 p-4 bg-white rounded-lg">
          <div class="mt-8 mb-6">
            <h2 class="text-2xl font-semibold border-b pb-2 text-indigo-900">Profile</h2>
            <textarea v-model="templateData.profile" placeholder="Enter your profile" class="w-full mt-4 bg-transparent border-none focus:outline-none text-indigo-900 auto-resize"></textarea>
          </div>
          <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">

          <div class="mt-8 mb-6">

            <h2 class="text-2xl font-semibold border-b pb-2 text-indigo-900">Experience</h2>
            <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
              <div v-for="(experience, index) in templateData.experiences" :key="index" class="mt-4 border-b pb-4">
                <h3 class="text-xl font-semibold text-indigo-900">
                  <textarea v-model="experience.jobTitle" placeholder="Enter job title" class="w-full bg-transparent border-none focus:outline-none text-indigo-900 auto-resize"></textarea>
                </h3>
                <p class="text-sm text-gray-600">
                  <textarea v-model="experience.company" placeholder="Enter company" class="w-full bg-transparent border-none focus:outline-none text-gray-600 auto-resize"></textarea>
                  -
                  <textarea v-model="experience.period" placeholder="Enter period" class="w-full bg-transparent border-none focus:outline-none text-gray-600 auto-resize"></textarea>
                </p>
                <textarea v-model="experience.description" placeholder="Enter job description" class="w-full mt-2 bg-transparent border-none focus:outline-none text-indigo-900 auto-resize"></textarea>
                <font-awesome-icon icon="circle-xmark" size="xl" @click="removeExperience(index)" class="text-red-500 hover:underline ml-2 cursor-pointer icon hover:animate-ping"/>
              </div>
            </draggable>
            <font-awesome-icon icon="circle-plus" @click="addExperience" size="xl" class="mt-4 text-indigo-900 hover:underline icon flex justify-center cursor-pointer transition-transform duration-300 hover:animate-spin"/>
          </div>
          <div class="mt-8">
            <h2 class="text-2xl font-semibold border-b pb-2 text-indigo-900">Education</h2>
            <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
              <div v-for="(education, index) in templateData.education" :key="index" class="mt-4 border-b pb-4">
                <h3 class="text-xl font-semibold text-indigo-900">
                  <textarea v-model="education.degree" placeholder="Enter degree" class="w-full bg-transparent border-none focus:outline-none text-indigo-900 auto-resize"></textarea>
                </h3>
                <p class="text-sm text-gray-600">
                  <textarea v-model="education.institution" placeholder="Enter institution" class="w-full bg-transparent border-none focus:outline-none text-gray-600 auto-resize"></textarea>
                  -
                  <textarea v-model="education.period" placeholder="Enter period" class="w-full bg-transparent border-none focus:outline-none text-gray-600 auto-resize"></textarea>
                </p>
                <textarea v-model="education.description" placeholder="Enter description" class="w-full mt-2 bg-transparent border-none focus:outline-none text-indigo-900 auto-resize"></textarea>
                <font-awesome-icon icon="circle-xmark" size="xl" @click="removeEducation(index)" class="text-red-500 hover:underline ml-2 cursor-pointer icon hover:animate-ping"/>
              </div>
            </draggable>
            <font-awesome-icon icon="circle-plus" @click="addEducation" size="xl" class="mt-4 text-indigo-900 hover:underline icon flex justify-center cursor-pointer transition-transform duration-300 hover:animate-spin"/>
          </div>
        </draggable>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Draggable from 'vue-draggable-next';
  import { VueDraggableNext } from 'vue-draggable-next';
  import saveBar from './saveBar.vue';

  export default {
    name: 'Template2',
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
          Hobbies: ['karate']
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
        this.templateData.Hobbies.push('');
      },
      removeSkill(index) {
        this.templateData.skills.splice(index, 1);
      },
      removeLanguages(index) {
        this.templateData.languages.splice(index, 1);
      },
      removeOther(index) {
        this.templateData.Hobbies.splice(index, 1);
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
        const templateID = 3;
        this.$emit('saveChanges', [templateID, this.templateData]);
      },
      editProfPic(pic){
        this.templateData.personalInfo.profilePicture=pic;
      },
      exportAsPDF(){
        const templateID = 3;
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
  
  <style scoped>
  .bg-indigo-900 {
    background-color: #4338ca;
  }
  .text-indigo-900 {
    color: #4338ca;
  }
  .text-indigo-300 {
    color: #a3bffa;
  }
  .text-indigo-400 {
    color: #818cf8;
  }
  .border-indigo-400 {
    border-color: #818cf8;
  }
  .min-w-screen-lg {
    min-width: 1024px;
  }
  input[type="placeholder"],
  textarea {
    overflow: hidden;
    white-space: normal;
    word-wrap: break-word;
    resize: none; /* Prevent textarea from being resized */
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  </style>