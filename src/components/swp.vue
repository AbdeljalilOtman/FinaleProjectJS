<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active" v-for=" template in templates" :key="template.id">
          <img class="d-block w-100" :src="getImagePath(template.image)" alt="First slide">
        </div>
    
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
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
    