<template>
  <div class="templates container mt-5">
    <h1 class="mb-4 text-center">Choose a Template</h1>
    <p class="description text-white text-center mb-4">
      Select from our range of professional and modern templates to get started quickly.
    </p>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="2500">
      <div class="carousel-inner">
        <div
          v-for="(template, index) in templates"
          :key="template.id"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <img class="d-block w-100 snapshot-img" :src="getImagePath(template.image)" :alt="template.name + ' slide'">
          <div class="carousel-caption d-none d-md-block">
            <h5 class="card-title">{{ template.name }}</h5>
            <p class="card-text">{{ template.description }}</p>
            <router-link class="btn btn-primary mt-2" :to="'/dashboard/templates/' + template.id">
              Select Template
            </router-link>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Templates',
  data() {
    return {
      templates: []
    };
  },
  async mounted() {
    // Simulate data fetching
    this.templates = [
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
      }
    ];
  },
  methods: {
    getImagePath(image) {
      return require(`@/assets/${image}`);
    }
  }
};
</script>

<style scoped>
.templates {
  background-color: #213555;
  text-align: center;
  padding: 20px;
  border-radius: 20px;
  border: 2px solid #213555;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: auto;
  color: #E5D283;
}

h1, .description, .footer-text {
  color: #E5D283;
}

.carousel-item {
  height: 50vh;
}

.snapshot-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title, .card-text {
  color: #f0f0f0;
}

.btn {
  background-color: #E5D283;
  color: #000000;
  border-color: #E5D283;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #E5D283;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-control-prev-icon::before,
.carousel-control-next-icon::before {
  content: '';
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 5px;
}

.carousel-control-prev-icon::before {
  transform: rotate(135deg);
}

.carousel-control-next-icon::before {
  transform: rotate(-45deg);
}
</style>
