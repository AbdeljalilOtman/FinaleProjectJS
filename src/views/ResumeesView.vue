<template>

  <div class="resumee-container">
    <nav aria-label="breadcrumb" class="main-breadcrumb ">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><router-link to="/dashboard">Dashboard</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">My Resumees</li>
          </ol>
    </nav>
    <h1 class="page-title">Check out exported resumes </h1>
    <div class="cards-container">
      <div class="resume-card" v-for="resumee in resumees" :key="resumee.templateId">
        <div class="card-header">
          Template ID: {{ resumee.templateId }}
        </div>
        <div class="card-body">
          <p>Date: {{ formatTimestamp(resumee.timestamp) }}</p>
          <router-link :to="`/dashboard/recents/${resumee.id}`" class="details-link">View Details</router-link>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { getExportedCvs } from '@/composables/useFirestore';
import getUser from '@/composables/getUser';

export default {
  name: 'ResumeesView',
  data() {
    return {
      resumees: []
    }
  },
  methods: {
    formatTimestamp(timestamp) {
      // Format the timestamp into a human-readable format
      return new Date(timestamp.seconds * 1000).toLocaleDateString("en-US");
    }
  },
  async created() {
    const { user } = getUser(); // Use destructuring to get the user ref
    const userId = user.value ? user.value.uid : null; // Safely get the user ID

    if (!userId) {
      throw new Error('User is not authenticated');
    }
    this.resumees = await getExportedCvs(userId);
  }
}
</script>

  
  <style>
  .page-title {
    color:rgb(1, 1, 1);
    font-size:10vh;
    font-weight: 700;
    font-family:'Times New Roman', Times, serif;
    text-align: center;
  }
  .resumee-container {

    margin-left: 20%;
    min-height: 100vh;
  }
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    gap: 20px;
  }
  .resume-card {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    width: 300px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }
  
  .resume-card:hover {
    transform: translateY(-5px);
  }
  
  .card-header {
    background-color: #00346c;
    color: white;
    padding: 10px 15px;
    font-size: 16px;
  }
  
  .card-body {
    padding: 15px;
    line-height: 1.6;
    color: #333;
  }
  
  .details-link {
    display: inline-block;
    margin-top: 10px;
    background-color: #357200;
    color: white;
    padding: 8px 12px;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s ease-in-out;
  }
  
  .details-link:hover {
    background-color: #00162e;
  }
  </style>
  