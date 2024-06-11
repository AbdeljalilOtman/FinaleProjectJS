<template>
    <saveBar @save="saveAllChanges" @exportAsPDF="exportAsPDF" @editProfPic="editProfPic"/>

    <div class="p-1 bg-gray-100 rounded-lg shadow-lg " id="template">
      <div class="flex">
        <!-- Left Column -->
        <div class="w-2/5 p-4 text-black ">
            <div class="flex items-center space-x-4 mb-6">
            <img :src="templateData.personalInfo.profilePicture" alt="Profile Picture" class="w-24 h-24 rounded-full shadow-md" />
            <div>
              <h1 class="text-3xl font-bold">
                <textarea v-model="templateData.personalInfo.name" placeholder="Enter your name" class="w-full bg-transparent border-none focus:outline-none text-black  auto-resize"></textarea>
              </h1>
              <p class="text-xl text-gray-300">
                <textarea v-model="templateData.jobTitle" placeholder="Enter your job title" class="w-full bg-transparent border-none focus:outline-none text-gray-500 auto-resize"></textarea>
              </p>
            </div>
          </div>
          <div class="mt-4 mb-6">
            <h2 class="text-2xl font-semibold border-b pb-2 border-gray-400 text-gray-400">Contact Info</h2>
            <p class="text-sm mt-2">
              <textarea v-model="templateData.personalInfo.contactInfo" placeholder="Enter your contact info" class="w-full bg-transparent border-none focus:outline-none text-black-800 auto-resize"></textarea>
            </p>
          </div>
          <div class="mt-8">
            <h2 class="text-2xl font-semibold border-b pb-2 text-gray-400">Skills</h2>
            <div class="mt-4">
              <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
                <div v-for="(skill, index) in templateData.skills" :key="index" class="flex items-center mt-2">
                  <textarea v-model="templateData.skills[index]" placeholder="Enter a skill" class="w-full bg-transparent border-none focus:outline-none text-black-800 auto-resize"></textarea>
                  <font-awesome-icon icon="xmark" @click="removeSkill(index)" size="lg" class="text-red-500 hover:underline ml-2 cursor-pointer icon hover:animate-ping"/>
                </div>
              </draggable>
              <font-awesome-icon icon="plus" @click="addSkill"  class="mt-4 text-gray-900 hover:underline icon flex justify-center cursor-pointer transition-transform duration-300 hover:rotate"/>
            </div>
          </div>
          <div class="mt-8">
            <h2 class="text-2xl font-semibold border-b pb-2 text-gray-400">Languages</h2>
            <div class="mt-4">
              <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
                <div v-for="(language, index) in templateData.languages" :key="index" class="flex items-center mt-2">
                  <textarea v-model="templateData.languages[index]" placeholder="Enter a language" class="w-full bg-transparent border-none focus:outline-none text-black-800  auto-resize"></textarea>
                  <font-awesome-icon icon="xmark" @click="removeLanguages(index)" size="lg" class="text-red-500 hover:underline ml-2 cursor-pointer icon hover:animate-ping"/>
                </div>
              </draggable>
              <font-awesome-icon icon="plus" @click="addLanguages"  class="mt-4 text-gray-900 hover:underline icon flex justify-center cursor-pointer transition-transform duration-300 hover:rotate"/>
            </div>
          </div>
          <div class="mt-8">
            <h2 class="text-2xl font-semibold border-b pb-2 text-gray-400">Others</h2>
            <div class="mt-4">
              <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
                <div v-for="(other, index) in templateData.Others" :key="index" class="flex items-center mt-2">
                  <textarea v-model="templateData.Others[index]" placeholder="Enter other information" class="w-full bg-transparent border-none focus:outline-none text-black-800 auto-resize"></textarea>
                  <font-awesome-icon icon="xmark" @click="removeOther(index)" size="lg" class="text-red-500 hover:underline ml-2 cursor-pointer icon hover:animate-ping"/>
                </div>
              </draggable>
              <font-awesome-icon icon="plus" @click="addOther"  class="mt-4 text-gray-900 hover:underline icon flex justify-center cursor-pointer transition-transform duration-300 hover:rotate"/>
            </div>
          </div>
        </div>
  
        <!-- Right Column -->
        <div class="w-3/5 p-4 bg-white rounded-lg">
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
            <font-awesome-icon icon="circle-plus" @click="addExperience" size="xl"  class="mt-4 text-gray-900 hover:underline icon flex justify-center cursor-pointer transition-transform duration-300 hover:rotate"/>
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
            <font-awesome-icon icon="circle-plus" @click="addEducation" size="xl" class="mt-4 text-gray-900 hover:underline icon flex justify-center cursor-pointer transition-transform duration-300 hover:rotate"/>
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
        const templateID = 2;
        this.$emit('saveChanges', [templateID, this.templateData]);
      },
      editProfPic(pic){
        this.templateData.personalInfo.profilePicture=pic;
      },
      exportAsPDF(){
        const templateID = 2;
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
  .bg-gray-100 {
    background-color: #f3f4f6; /* Lighter shade for a cleaner look */
  }
  
  .text-gray-900 {
    color: #2d3748; /* Darker for better contrast and readability */
  }
  
  .text-gray-300 {
    color: #e2e8f0; /* Lighter for subtle details */
  }
  
  .text-gray-400 {
    color: #a0aec0; /* Adjusted for better visibility and contrast */
  }
  
  .text-gray-600 {
    color: #4a5568; /* Darker to enhance legibility */
  }
  
  .bg-gray-800 {
    background-color: #1a202c; /* Very dark for strong contrast on light backgrounds */
  }
  
  .border-gray-300 {
    border-color: #edf2f7; /* Lighter to soften the borders */
  }
  
  .border-gray-400 {
    border-color: #cbd5e0; /* Kept the same for consistency */
  }
  
  .min-w-screen-lg {
    min-width: 1024px; /* Ensure minimum width for larger screens */
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
  
  .icon {
    transition: all 0.3s ease; /* Smooth transition for icon interactions */
  }
  
  .icon:hover {
    color: #63b3ed; /* A vibrant color for hover states */
    transform: scale(1.1); /* Slightly enlarge icons on hover */
  }
  
  .details-link, .text-white {
    color: #ffffff; /* Ensure readability */
    background-color: #3182ce; /* Consistent theme color for buttons and links */
  }
  
  .details-link:hover {
    background-color: #2c5282; /* Darker shade on hover for depth */
  }
  
  .button-bg {
    background-color: #4fd1c5; /* Teal shade for buttons to stand out */
    color: white;
    border-radius: 6px;
    padding: 8px 16px;
  }
  
  .button-bg:hover {
    background-color: #38b2ac; /* Slightly darker teal on hover */
  }
  </style>
  