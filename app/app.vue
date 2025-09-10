<template lang="">
  <div
    class="min-h-screen bg-netflix-dark text-white font-sans overflow-x-hidden"
  >
    <AppHeader />
    <AppHero :featured="featuredContent" />
    <div
      class="relative z-10 -mt-2 pb-20 space-y-16 max-w-screen overflow-x-hidden"
    >
      <SpotlightCarousel :items="spotlightCarousel" data-aos="fade-up" />
      <MovieRow
        :title="movieRows[0].title"
        :movies="movieRows[0].movies"
        :size="movieRows[0].size"
        :type="movieRows[0].type"
        data-aos="fade-up"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import AppHeader from "./components/header.vue";
import AppHero from "./components/hero.vue";
import SpotlightCarousel from "./components/spotlightCarousel.vue";
import MovieRow from "./components/movieRow.vue";

const featuredContent = ref({
  title: "Stranger Things",
  description: `When a young boy vanishes,a small town oncovers a mystery involving secret experiments,
  terrifying supernatural forces and one strange little girl.`,
  imageUrl: "/hero.jpg",
  genres: ["Sci-Fi", "Horror", "Drama"],
  year: 2016,
  seasons: 4,
  rating: 8.7,
});

const spotlightCarousel = ref([
  {
    id: 21,
    title: "The Crown",
    imageUrl: "https://image.tmdb.org/t/p/w500/jFuH0md41x5mB4qj5344mSmtHrO.jpg",
    description:
      "This drama follows the political rivalries and romance of Queen Elizabeth II's resign",
  },
  {
    id: 22,
    title: "Peaky Blinders",
    imageUrl: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    description:
      "This drama follows the political rivalries and romance of Queen Elizabeth II's resign",
  },
  {
    id: 23,
    title: "The Boys",
    imageUrl: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
    description:
      "This drama follows the political rivalries and romance of Queen Elizabeth II's resign",
  },
]);

const movieRows = ref([
  {
    title: "Continue Watching",
    movies: [
      { id: 1, title: "Bloodshot", imageUrl: "/movies/movie1.jpg" },
      { id: 2, title: "Money Heist", imageUrl: "/movies/movie2.jpg" },
      { id: 3, title: "Dark", imageUrl: "/movies/movie3.jpg" },
      { id: 4, title: "Queen Gambit", imageUrl: "/movies/movie4.jpg" },
      { id: 5, title: "Breaking Bad", imageUrl: "/movies/movie5.jpg" },
    ],
    size: "medium",
    type: "progress"
  }
]);

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  });
});
</script>
