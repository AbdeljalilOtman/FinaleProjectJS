
<template>
<editBar @exportAsPDF="exportAsPDF"/>

  <div class="max-w-full overflow-x-auto my-8 p-8 bg-white rounded-lg shadow-lg min-w-screen-lg " >
    <div class="flex" id="template">
      <!-- Left Column -->
      <div class="flex-none w-1/3 p-4 bg-gray-100 rounded-lg bg-black text-white">
        <div class="flex items-center space-x-4 mb-6">
          <img :src="templateData.personalInfo.profilePicture" alt="Profile Picture" class="w-24 h-24 rounded-full shadow-md" />

          <div>
            <h1 class="text-3xl font-bold">
              <input v-model="templateData.personalInfo.name" placeholder="Enter your name" class="w-full bg-transparent border-none focus:outline-none text-white" />
            </h1>
            <p class="text-xl text-gray-400">
              <input v-model="templateData.jobTitle" placeholder="Enter your job title" class="w-full bg-transparent border-none focus:outline-none text-gray-400" />
            </p>
          </div>
        </div>
        <div class="mt-4 mb-6">
          <h2 class="text-2xl font-semibold border-b pb-2 border-gold text-gold">Contact Info</h2>
          <p class="text-sm text-gray-400 mt-2">
            <input v-model="templateData.personalInfo.contactInfo" placeholder="Enter your contact info" class="w-full bg-transparent border-none focus:outline-none text-gray-400" />
          </p>
        </div>
        <div class="mt-8">
          <h2 class="text-2xl font-semibold border-b pb-2 border-gold text-gold">Skills</h2>
          <div class="mt-4">
            <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
              <div v-for="(skill, index) in templateData.skills" :key="index" class="flex items-center mt-2">
                <input v-model="templateData.skills[index]" placeholder="Enter a skill" class="w-full bg-transparent border-none focus:outline-none text-white" />
                <button @click="removeSkill(index)" class="text-red-500 hover:underline ml-2">Remove</button>
              </div>
            </draggable>

            <button @click="addSkill" class="mt-4 text-gold hover:underline">Add Skill</button>
          </div>
        </div>
        <div v-for="(section, index) in customSections" :key="index" class="mt-8">
          <h2 class="text-2xl font-semibold border-b pb-2 border-gold text-gold">{{ section.name }}</h2>
          <input v-model="section.content" placeholder="Enter content for {{ section.name }}" class="w-full bg-transparent border-none focus:outline-none text-white">
        </div>

      </div>

      <!-- Right Column -->
      <div class="flex-grow md:w-2/3 p-4">
        <div class="mt-8 md:mt-0 mb-6">
          <h2 class="text-2xl font-semibold border-b pb-2 text-black">Profile</h2>
          <textarea v-model="templateData.profile" placeholder="Enter your profile" class="w-full mt-4 bg-transparent border-none focus:outline-none text-black"></textarea>
        </div>
        <div class="mt-8 mb-6">
          <h2 class="text-2xl font-semibold border-b pb-2 text-black">Experience</h2>
          <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
            <div v-for="(experience, index) in templateData.experiences" :key="index" class="mt-4 border-b pb-4">
              <h3 class="text-xl font-semibold text-black">
                <input v-model="experience.jobTitle" placeholder="Enter job title" class="w-full bg-transparent border-none focus:outline-none text-black" />
              </h3>
              <p class="text-sm text-gray-600">
                <input v-model="experience.company" placeholder="Enter company" class="w-full bg-transparent border-none focus:outline-none text-gray-600" />
                -
                <input v-model="experience.period" placeholder="Enter period" class="w-full bg-transparent border-none focus:outline-none text-gray-600" />
              </p>
              <textarea v-model="experience.description" placeholder="Enter job description" class="w-full mt-2 bg-transparent border-none focus:outline-none text-black"></textarea>
              <button @click="removeExperience(index)" class="text-red-500 hover:underline ml-2">Remove Experience</button>
            </div>
          </draggable>
          <button @click="addExperience" class="mt-4 text-gold hover:underline">Add Experience</button>
        </div>
        <div class="mt-8">
          <h2 class="text-2xl font-semibold border-b pb-2 text-black">Education</h2>
          <draggable class="dragArea list-group w-100" :list="templateData.list" @change="log">
            <div v-for="(education, index) in templateData.education" :key="index" class="mt-4 border-b pb-4">
              <h3 class="text-xl font-semibold text-black">
                <input v-model="education.degree" placeholder="Enter degree" class="w-full bg-transparent border-none focus:outline-none text-black" />
              </h3>
              <p class="text-sm text-gray-600">
                <input v-model="education.institution" placeholder="Enter institution" class="w-full bg-transparent border-none focus:outline-none text-gray-600" />
                -
                <input v-model="education.period" placeholder="Enter period" class="w-full bg-transparent border-none focus:outline-none text-gray-600" />
              </p>
              <textarea v-model="education.description" placeholder="Enter description" class="w-full mt-2 bg-transparent border-none focus:outline-none text-black"></textarea>
              <button @click="removeEducation(index)" class="text-red-500 hover:underline ml-2">Remove Education</button>
            </div>
          </draggable>
          <button @click="addEducation" class="mt-4 text-gold hover:underline">Add Education</button>
        </div>
      </div>
    </div>
    <div class="mt-8">
      <button @click="saveAllChanges" class="px-4 py-2 bg-gold text-black rounded hover:bg-yellow-600">Save Changes</button>
    </div>
  </div>
</template>

<script>
import Draggable from 'vue-draggable-next';
import { VueDraggableNext } from 'vue-draggable-next';
import editBar from './editBar.vue';

export default {
  name: 'Template1',
  components: {
      Draggable,
      draggable: VueDraggableNext,
      editBar
      
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
      customSections: [] , // Array to hold custom sections
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
    addCustomSection(sectionName) {
      // Add a new custom section with empty content by default
      this.customSections.push({
        name: sectionName,
        content: ''
      });
    },
    saveAllChanges() {
      const templateID = 1;
      const templateData = { ...this.templateData };
      this.customSections.forEach(sec => {
        templateData[sec.name] = sec.content;
      });
    //  console.log(templateData);
      this.$emit('saveChanges', [templateID, templateData ,false]);

    },
    updateProfPic(profPic) {
      this.templateData.personalInfo.profilePicture = profPic;
    },
    exportAsPDF() {
      const templateID = 1;
      const templateData = { ...this.templateData };
      this.customSections.forEach(sec => {
        templateData[sec.name] = sec.content;
      });
      this.$emit('exportAsPDF', [templateID, templateData ,true]);
    }


  }
}
</script>

<style scoped>
.bg-black {
  background-color: #000000;
}
.text-black {
  color: #000000;
}
.text-gold {
  color: #FFD700;
}
.border-gold {
  border-color: #FFD700;
}
.bg-gold {
  background-color: #FFD700;
}
.min-w-screen-lg {
  min-width: 1024px;
}
</style>
