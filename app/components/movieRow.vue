<template>
  <div class="mb-12 px-8 mt-32" data-aos="fade-up">
    <h2 class="text-xl font-bold mb-4">{{ title }}</h2>
    <div class="relative">
      <Carousel
        :setting="carouselSettings"
        :breakpoints="breakpoints"
        class="carousel"
      >
        <Slide v-for="movie in movies" :key="movie.id">
          <div class="carousel__item px-1">
            <MovieCard :movie="movie" :size="size" />
          </div>
        </Slide>
        <template #addons>
          <Navigation>
            <template #next>
              <button
                class="z-20 w-16 bg-gradient-to-l from-black/70 to-transparent flex 
                items-center justify-center"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <Icon icon="mdi:chevron-right" width="50" class="text-white" />
              </button>
            </template>
            <template #prev>
              <button
                class="z-20 w-16 bg-gradient-to-l from-black/70 to-transparent flex 
                items-center justify-center"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <Icon icon="mdi:chevron-left" width="50" class="text-white" />
              </button>
            </template>
          </Navigation>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import MovieCard from "./movieCard.vue";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
defineProps({
  title: String,
  movies: Array,
  size: {
    type: String,
    default: "medium",
  },
});

const carouselSettings = {
  itemsToShow: 5.5,
  wrapAround: false,
  transition: 500,
  snapAlign: "start",
};

const breakpoints = {
  300: {
    itemsToShow: 1,
    itemsToScroll: 1,
    snapAlign: "start",
  },
  640: {
    itemsToShow: 2,
    itemsToScroll: 2,
    snapAlign: "start",
  },
  768: {
    itemsToShow: 3.5,
    itemsToScroll: 3,
    snapAlign: "start",
  },
  1024: {
    itemsToShow: 4.5,
    itemsToScroll: 4,
    snapAlign: "start",
  },
  1280: {
    itemsToShow: 5.5,
    itemsToScroll: 5,
    snapAlign: "start",
  },
};
</script>
