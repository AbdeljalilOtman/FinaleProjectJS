<template>
  <div class="max-w-full overflow-x-auto my-2 p-2 bg-white rounded-lg shadow-lg min-w-screen-lg" id="template">
    <div class="flex flex-wrap">
      <!-- Right Column (Now on the left) -->
      <div class="flex-grow md:w-2/3 p-4 bg-gray-100 rounded-lg">
        <div class="mt-8 md:mt-0 mb-6">
          <h2 class="text-2xl font-semibold border-b pb-2 text-blue-900">Profile</h2>
          <textarea v-model="templateData.profile" placeholder="Enter your profile" class="w-full mt-4 bg-transparent border-none focus:outline-none text-blue-900 auto-resize"></textarea>
        </div>
        <div class="mt-8 mb-6">
          <h2 class="text-2xl font-semibold border-b pb-2 text-blue-900">Experience</h2>
          <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
            <div v-for="(experience, index) in templateData.experiences" :key="index" class="mt-4 border-b pb-4">
              <h3 class="text-xl font-semibold text-blue-900">
                <textarea v-model="experience.jobTitle" placeholder="Enter job title" class="w-full bg-transparent border-none focus:outline-none text-blue-900 auto-resize"></textarea>
              </h3>
              <p class="text-sm text-gray-600">
                <textarea v-model="experience.company" placeholder="Enter company" class="w-full bg-transparent border-none focus:outline-none text-gray-600 auto-resize"></textarea>
                -
                <textarea v-model="experience.period" placeholder="Enter period" class="w-full bg-transparent border-none focus:outline-none text-gray-600 auto-resize"></textarea>
              </p>
              <textarea v-model="experience.description" placeholder="Enter job description" class="w-full mt-2 bg-transparent border-none focus:outline-none text-blue-900 auto-resize"></textarea>
              <button @click="removeExperience(index)" class="text-red-500 hover:underline ml-2">Remove Experience</button>
            </div>
          </draggable>
          <button @click="addExperience" class="mt-1 text-teal-500 hover:underline">Add Experience</button>
        </div>
        <div class="mt-1">
          <h2 class="text-2xl font-semibold border-b pb-2 text-blue-900">Education</h2>
          <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
            <div v-for="(education, index) in templateData.education" :key="index" class="mt-1 border-b pb-4">
              <h3 class="text-xl font-semibold text-blue-900">
                <textarea v-model="education.degree" placeholder="Enter degree" class="w-full bg-transparent border-none focus:outline-none text-blue-900 auto-resize"></textarea>
              </h3>
              <p class="text-sm text-gray-600">
                <textarea v-model="education.institution" placeholder="Enter institution" class="w-full bg-transparent border-none focus:outline-none text-gray-600 auto-resize"></textarea>
                -
                <textarea v-model="education.period" placeholder="Enter period" class="w-full bg-transparent border-none focus:outline-none text-gray-600 auto-resize"></textarea>
              </p>
              <textarea v-model="education.description" placeholder="Enter description" class="w-full mt-1 bg-transparent border-none focus:outline-none text-blue-900 auto-resize"></textarea>
              <button @click="removeEducation(index)" class="text-red-500 hover:underline ml-2">Remove Education</button>
            </div>
          </draggable>
          <button @click="addEducation" class="mt-1 text-teal-500 hover:underline">Add Education</button>
        </div>
      </div>

      <!-- Left Column (Now on the right) -->
      <div class="flex-none w-full md:w-1/3 p-4 bg-blue-900 rounded-lg text-white">
        <div class="flex items-center space-x-4 mb-6">
          <img :src="templateData.personalInfo.profilePicture" alt="Profile Picture" class="w-24 h-24 rounded-full shadow-md" />

          <div>
            <h1 class="text-3xl font-bold">
              <textarea v-model="templateData.personalInfo.name" placeholder="Enter your name" class="w-full bg-transparent border-none focus:outline-none text-white auto-resize"></textarea>
            </h1>
            <p class="text-xl text-gray-400">
              <textarea v-model="templateData.jobTitle" placeholder="Enter your job title" class="w-full bg-transparent border-none focus:outline-none text-gray-400 auto-resize"></textarea>
            </p>
          </div>
        </div>
        <div class="mt-1 mb-1">
          <h2 class="text-2xl font-semibold border-b pb-2 border-teal-500 text-teal-500">Contact Info</h2>
          <p class="text-sm text-gray-400 mt-2">
            <textarea v-model="templateData.personalInfo.contactInfo" placeholder="Enter your contact info" class="w-full bg-transparent border-none focus:outline-none text-gray-400 auto-resize"></textarea>
          </p>
        </div>
        <div class="mt-1">
          <h2 class="text-2xl font-semibold border-b pb-2 border-teal-500 text-teal-500">Skills</h2>
          <div class="mt-4">
            <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
              <div v-for="(skill, index) in templateData.skills" :key="index" class="flex items-center mt-2">
                <textarea v-model="templateData.skills[index]" placeholder="Enter a skill" class="w-full bg-transparent border-none focus:outline-none text-white auto-resize"></textarea>
                <button @click="removeSkill(index)" class="text-red-500 hover:underline ml-2">Remove</button>
              </div>
            </draggable>

            <button @click="addSkill" class="mt-4 text-teal-500 hover:underline">Add Skill</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Draggable from 'vue-draggable-next';
import { VueDraggableNext } from 'vue-draggable-next';
export default {
  name: 'Template2',
  components: {
    Draggable,
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
        skills: ['JavaScript']
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
    removeSkill(index) {
      this.templateData.skills.splice(index, 1);
    },
    addExperience() {
      this.templateData.experiences.push({
        jobTitle: '',
        company: '',
        period: '',
        description: ''
      });
    },
    removeExperience(index) {
      this.templateData.experiences.splice(index, 1);
    },
    addEducation() {
      this.templateData.education.push({
        degree: '',
        institution: '',
        period: '',
        description: ''
      });
    },
    removeEducation(index) {
      this.templateData.education.splice(index, 1);
    },
    saveAllChanges() {
      const templateID = 2;
      const templateData = { ...this.templateData };
      this.$emit('saveChanges', [templateID, templateData]);
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.templateData.personalInfo.profilePicture = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
  mounted() {
    // Auto-resize textareas on input
    const autoResize = (textarea) => {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    };
    this.$nextTick(() => {
      const textareas = this.$el.querySelectorAll('.auto-resize');
      textareas.forEach(textarea => {
        autoResize(textarea);
        textarea.addEventListener('input', () => autoResize(textarea));
      });
    });
  }
}
</script>

<style scoped>
.bg-blue-900 {
  background-color: #1E3A8A;
}
.text-blue-900 {
  color: #1E3A8A;
}
.text-teal-500 {
  color: #38B2AC;
}
.border-teal-500 {
  border-color: #38B2AC;
}
.bg-teal-500 {
  background-color: #38B2AC;
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
</style>
