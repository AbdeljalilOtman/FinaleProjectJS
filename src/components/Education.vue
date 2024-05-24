<template>
  <div>
    <h3 @click="editField('educationTitle')">
      <span v-if="!edit.educationTitle">{{ resume.educationTitle }}</span>
      <input v-else type="text" v-model="resume.educationTitle" @keydown.enter="saveField('educationTitle')" />
    </h3>
    <p @click="editField('school')">
      <span v-if="!edit.school">{{ resume.school }}</span>
      <input v-else type="text" v-model="resume.school" @keydown.enter="saveField('school')" />
    </p>
    <p @click="editField('educationDates')">
      <span v-if="!edit.educationDates">{{ resume.educationDates }}</span>
      <input v-else type="text" v-model="resume.educationDates" @keydown.enter="saveField('educationDates')" />
    </p>
    <ul>
      <li v-for="(course, index) in resume.courses" :key="index" @click="editCourse(index)">
        <span v-if="!edit['course' + index]">{{ course }}</span>
        <input v-else type="text" v-model="resume.courses[index]" @keydown.enter="saveCourse(index)" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Education',
  data() {
    return {
      resume: {
        educationTitle: 'MSc Space Syntax: Architecture and Cities',
        school: 'Bartlett School of Architecture (UCL)',
        educationDates: '09/2014 - 06/2016',
        courses: [
          'Spatial Dynamics and Computation',
          'Architectural Phenomena',
          'Buildings, Organizations, and Networks',
          'Design as a Knowledge-Based Process'
        ]
      },
      edit: {
        educationTitle: false,
        school: false,
        educationDates: false
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
    editCourse(index) {
      this.edit['course' + index] = true;
    },
    saveCourse(index) {
      this.edit['course' + index] = false;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
