<template>
  <div class="templates container mt-5">
    <h1 class="mb-4 text-center">Choose a Template</h1>
    <div class="row">
      <div v-for="(template, index) in templates" :key="template.id" class="template-item">
          <h5 class="card-title">{{ template.name }}</h5>
          <p class="card-text">{{ template.description }}</p>
          <div class="card">

              <img :src="getImagePath(template.image)" class="snapshot-img" alt="Template image">

          </div> 
          <router-link class="btn btn-primary" :to="'/dashboard/templates/'+template.id">
            Select Template
          </router-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Templates',
  data() {
    return {
      templates: [
        {
          id: 1,
          name: 'Template1',
          description: 'A modern and clean template.',
          image: 'Template1.png'
        },
        {
          id: 2,
          name: 'Template2',
          description: 'A professional and elegant template.',
          image: 'Template2.png'
        },
      ]
    };
  },
  methods: {
    getImagePath(image) {
      return require(`@/assets/${image}`);
    }
  }
};
</script>

<style scoped>
.row {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding-bottom: 10px;
}

.template-item {
  flex: 0 0 auto;
  width: 80%;
  max-width: 400px;
}

.card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  padding-bottom: 66.25%; /* Maintain a 16:9 aspect ratio */
}

.snapshot-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

@media (min-width: 576px) {
  .template-item {
    width: 60%;
  }
}

@media (min-width: 768px) {
  .template-item {
    width: 50%;
  }
}

@media (min-width: 992px) {
  .template-item {
    width: 33.33%;
  }
}

@media (min-width: 1200px) {
  .template-item {
    width: 25%;
  }
}

.templates {
  margin-top: 20px;
}
.card:hover {
  transform: scale(1.05);
  transition: transform 0.2s;
}
</style>
