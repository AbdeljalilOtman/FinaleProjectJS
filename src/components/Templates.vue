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
          <router-link class="carousel-link" :to="'/dashboard/templates/' + template.id">
            <div class="image-wrapper">
              <img class="d-block mx-auto snapshot-img" :src="getImagePath(template.image)" :alt="template.name + ' slide'">
              <div class="overlay">
                <div class="text">
                  <h5 class="card-title">{{ template.name }}</h5>
                  <p class="card-text">{{ template.description }}</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');

.templates {
  background: linear-gradient(120deg, #343434, #302e2e);
  text-align: center;
  padding: 40px;
  border-radius: 20px;
  border: 2px solid #ffffff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  max-width: 1200px;
  margin: auto;
  color: #083b4f;
  font-family: 'Nunito', sans-serif;
}

h1, .description {
  color: #ffffff;
  font-weight: 700;
}

.carousel-item {
  height: 60vh;
}

.image-wrapper {
  position: relative;
  display: inline-block;
  border-radius: 20px;
  overflow: hidden;
}

.snapshot-img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.snapshot-img:hover {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-wrapper:hover .overlay {
  opacity: 1;
}

.text {
  text-align: center;
  padding: 20px;
}

.carousel-link {
  display: block;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #FFFFFF;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.carousel-control-prev-icon::before,
.carousel-control-next-icon::before {
  content: '';
  border: solid #083b4f;
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
