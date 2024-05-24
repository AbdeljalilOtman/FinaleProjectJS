<template>
  <div>
    <h3 @click="editField('jobTitle')">
      <span v-if="!edit.jobTitle">{{ resume.jobTitle }}</span>
      <input v-else type="text" v-model="resume.jobTitle" @keydown.enter="saveField('jobTitle')" />
    </h3>
    <p @click="editField('company')">
      <span v-if="!edit.company">{{ resume.company }}</span>
      <input v-else type="text" v-model="resume.company" @keydown.enter="saveField('company')" />
    </p>
    <p @click="editField('jobDates')">
      <span v-if="!edit.jobDates">{{ resume.jobDates }}</span>
      <input v-else type="text" v-model="resume.jobDates" @keydown.enter="saveField('jobDates')" />
    </p>
    <ul>
      <li v-for="(achievement, index) in resume.achievements" :key="index" @click="editAchievement(index)">
        <span v-if="!edit['achievement' + index]">{{ achievement }}</span>
        <input v-else type="text" v-model="resume.achievements[index]" @keydown.enter="saveAchievement(index)" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WorkExperience',
  data() {
    return {
      resume: {
        jobTitle: 'Intern Architect',
        company: 'Chaudfontaine Architects',
        jobDates: '07/2016 - 05/2017',
        achievements: [
          'Developed and executed online, social media, and print marketing strategies for the new projects.',
          'Participated in the organization of 5 major projects nationally and internationally.',
          'Produced drawings and layouts and assisted in the presentation of the projects.',
          'Clients had a success rate of over 95%.',
          'Created 3D models, rendering, and video animations.'
        ]
      },
      edit: {
        jobTitle: false,
        company: false,
        jobDates: false
      }
    };
  },
  methods: {
    editField(field) {
      this.edit[field] = true;
    },
    saveField(field) {
      this.edit[field] = false;
    },
    editAchievement(index) {
      this.edit['achievement' + index] = true;
    },
    saveAchievement(index) {
      this.edit['achievement' + index] = false;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
