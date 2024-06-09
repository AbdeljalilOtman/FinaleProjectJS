<template>
  <div class="max-w-4xl mx-auto my-8 p-8 bg-white rounded-lg shadow-lg">
    <div class="flex items-center space-x-4">
      <img :src="profilePicture" alt="Profile Picture" class="w-24 h-24 rounded-full shadow-md" />
      <div>
        <h1 class="text-3xl font-bold">{{ fullName }}</h1>
        <p class="text-xl text-gray-600">{{ jobTitle }}</p>
        <p class="text-sm text-gray-500">{{ contactInfo }}</p>
      </div>
    </div>
    <div class="mt-8">
      <h2 class="text-2xl font-semibold border-b pb-2">Profile</h2>
      <p class="mt-4 text-gray-700">{{ profile }}</p>
    </div>
    <div class="mt-8">
      <h2 class="text-2xl font-semibold border-b pb-2">Experience</h2>
      <div v-for="(experience, index) in experiences" :key="index" class="mt-4">
        <h3 class="text-xl font-semibold">{{ experience.jobTitle }}</h3>
        <p class="text-sm text-gray-500">{{ experience.company }} - {{ experience.period }}</p>
        <p class="mt-2 text-gray-700">{{ experience.description }}</p>
      </div>
    </div>
    <div class="mt-8">
      <h2 class="text-2xl font-semibold border-b pb-2">Education</h2>
      <div v-for="(education, index) in education" :key="index" class="mt-4">
        <h3 class="text-xl font-semibold">{{ education.degree }}</h3>
        <p class="text-sm text-gray-500">{{ education.institution }} - {{ education.period }}</p>
        <p class="mt-2 text-gray-700">{{ education.description }}</p>
      </div>
    </div>
    <div class="mt-8">
      <h2 class="text-2xl font-semibold border-b pb-2">Skills</h2>
      <ul class="mt-4 flex flex-wrap gap-2">
        <li v-for="(skill, index) in skills" :key="index" class="px-3 py-1 bg-gray-200 rounded-full text-gray-700">
          {{ skill }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Template1',
  data() {
    return {
      profilePicture: 'https://via.placeholder.com/150',
      fullName: 'John Doe',
      jobTitle: 'Software Engineer',
      contactInfo: 'john.doe@example.com | (123) 456-7890',
      profile: 'An experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.',
      experiences: [
        { jobTitle: 'Senior Software Engineer', company: 'Tech Corp', period: '2019 - Present', description: 'Developed and implemented software solutions that improved operations by 20%.' },
        { jobTitle: 'Software Engineer', company: 'Web Solutions', period: '2015 - 2019', description: 'Collaborated with team members to create reliable software systems.' }
      ],
      education: [
        { degree: 'B.S. in Computer Science', institution: 'University of Technology', period: '2011 - 2015', description: 'Graduated with honors and a focus in software engineering.' }
      ],
      skills: ['JavaScript', 'Vue.js', 'Tailwind CSS', 'Node.js']
    }
  }
}
</script>

<style scoped>
/* Add any additional styling here */
</style>
