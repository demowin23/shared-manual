<template>
  <div class="slider-container">
    <swiper
      :modules="[
        SwiperAutoplay,
        SwiperEffectFade,
        SwiperNavigation,
        SwiperPagination,
      ]"
      :slides-per-view="1"
      :loop="true"
      :effect="'fade'"
      :fade-effect="{ crossFade: true }"
      :speed="1000"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :navigation="{
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
      }"
      :pagination="{
        clickable: true,
        dynamicBullets: true,
      }"
      class="mySwiper"
    >
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <a :href="slide.href" :title="slide.title">
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-[500px] object-cover"
          />
        </a>
      </swiper-slide>
      <div class="custom-prev">
        <font-awesome-icon icon="chevron-left" />
      </div>
      <div class="custom-next">
        <font-awesome-icon icon="chevron-right" />
      </div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: { Swiper, SwiperSlide },
  data() {
    return {
      slides: [
        {
          href: "/",
          title: "Chung cư",
          image: "/images/Banner_01.jpg",
        },
        {
          href: "https://dadiland.com/",
          title: "Chung cư",
          image: "/images/Banner_02.jpg",
        },
        {
          href: "https://dadiland.com/",
          title: "Chung cư",
          image: "/images/Banner_03.jpg",
        },
        {
          href: "https://dadiland.com/",
          title: "Chung cư",
          image: "/images/Roman-Plaza-Slider.jpg",
        },
      ],
      SwiperAutoplay: Autoplay,
      SwiperEffectFade: EffectFade,
      SwiperNavigation: Navigation,
      SwiperPagination: Pagination,
    };
  },
};
</script>

<style scoped>
.slider-container {
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  padding: 30px 0;
}

:deep(.swiper) {
  width: 100%;
  height: 500px;
}

:deep(.swiper-slide) {
  width: 100%;
  height: 500px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

:deep(.swiper-slide img) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease;
}

:deep(.swiper-slide:hover img) {
  transform: scale(1.05);
}

.custom-next,
.custom-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 35px;
  height: 35px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.custom-next {
  right: 10px;
}

.custom-prev {
  left: 10px;
}

.custom-next:hover,
.custom-prev:hover {
  background: rgba(255, 255, 255, 1);
  transform: translateY(-50%) scale(1.1);
}

.custom-next svg,
.custom-prev svg {
  width: 16px;
  height: 16px;
  color: #333;
}

:deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 0.7;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background: white;
  opacity: 1;
  transform: scale(1.2);
}

:deep(.swiper-slide) a {
  display: block;
  width: 100%;
  height: 100%;
}

:deep(.swiper-cube-shadow) {
  opacity: 0.15;
}
</style>
