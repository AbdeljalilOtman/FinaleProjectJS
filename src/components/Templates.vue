<template>
  <div class="templates container mt-5">
    <h1 class="mb-4 text-center">Choose a Template</h1>
    <p class="description text-white text-center mb-4">
      Select from our range of professional and modern templates to get started quickly.
    </p>
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      :navigation="true"
      class="mySwiper"
    >
      <swiper-slide v-for="(template, index) in templates" :key="template.id">
        <div class="template-item">
          <h5 class="card-title">{{ template.name }}</h5>
          <p class="card-text">{{ template.description }}</p>
          <div class="card">
            <img :src="getImagePath(template.image)" class="snapshot-img" alt="Template image" />
          </div>
          <router-link class="btn btn-primary mt-2" :to="'/dashboard/templates/' + template.id">
            Select Template
          </router-link>
        </div>
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
    <p class="footer-text text-white text-center mt-4">Drag to see more templates &gt;&gt;</p>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';

export default {
  name: 'Templates',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      templates: [],
      modules: [Autoplay, Pagination, Navigation]
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

.loading {
  font-size: 18px;
}

.swiper-container {
  padding-bottom: 20px;
}

.template-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #314e74;
}

.card {
  width: 50%;
  height: 50vh;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.snapshot-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-title, .card-text {
  margin: 10px 0;
  color: #f0f0f0;
}

.btn {
  background-color: #E5D283;
  color: #000000;
  border-color: #E5D283;
}
</style>
