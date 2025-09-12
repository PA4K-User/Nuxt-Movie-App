<template lang="">
  <div
    class="min-h-screen bg-netflix-dark text-white font-sans overflow-x-hidden"
  >
    <AppHeader />
    <AppHero :featured="featuredContent" />
    <div
      class="relative z-10 -mt-32 pb-20 space-y-16 max-w-screen overflow-x-hidden"
    >
      <SpotlightCarousel :items="spotlightCarousel" data-aos="fade-up" />
      <MovieRow
        :title="movieRows[0].title"
        :movies="movieRows[0].movies"
        :size="movieRows[0].size"
        :type="movieRows[0].type"
        data-aos="fade-up"
      />
      <FeaturedCategory
        title="New & Popular"
        :featured="movieRows[1].movies[0]"
        :items="movieRows[1].movies.slice(1, 5)"
        data-aos="fade-up"
      />
      <GenreGrid title="Browse by Genre" :genres="genres" data-aos="fade-up"/>
      <MovieRow
        :title="movieRows[2].title"
        :movies="movieRows[2].movies"
        :size="movieRows[2].size"
        :type="movieRows[2].type"
        data-aos="fade-up"
      />
    </div>
    <AppFooter/>
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
import FeaturedCategory from "./components/featuredCategory.vue";
import GenreGrid from "./components/genreGrid.vue";
import AppFooter from "./components/footer.vue";

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

const genres = ref([
  {name: 'Action', imageUrl: '/image5.jpg'},
  {name: 'Comedy', imageUrl: '/image2.jpg'},
  {name: 'Drama', imageUrl: '/image1.jpg'},
  {name: 'Sci-Fi', imageUrl: '/image6.jpg'},
  {name: 'Horror', imageUrl: '/image4.jpg'},
  {name: 'Documentary', imageUrl: '/image3.jpg'},
])

const movieRows = ref([
  {
    title: "Continue Watching",
    movies: [
      { id: 1, title: "Bloodshot", imageUrl: "/movies/movie1.jpg", rating: 8.8},
      { id: 2, title: "Money Heist", imageUrl: "/movies/movie2.jpg", rating: 8.7},
      { id: 3, title: "Dark", imageUrl: "/movies/movie3.jpg", rating: 8.5},
      { id: 4, title: "Queen Gambit", imageUrl: "/movies/movie4.jpg", rating: 7.9},
      { id: 5, title: "Breaking Bad", imageUrl: "/movies/movie5.jpg", rating: 8.4},
    ],
    size: "medium",
    type: "progress",
  },
  {
    title: "Popular On Netflix",
    movies: [
      { id: 6, title: "The Last of Us", imageUrl: "/movies/movie6.jpg", rating: 8.7},
      { id: 7, title: "Wednesday", imageUrl: "/movies/movie7.jpg", rating: 9.0},
      { id: 8, title: "House of the Dragon", imageUrl: "/movies/movie8.jpg", rating: 8.0},
      { id: 9, title: "The Sandman", imageUrl: "/movies/movie9.jpg", rating: 8.5},
      { id: 10, title: "Andor", imageUrl: "/movies/movie10.jpg", rating: 7.5},
    ],
    size: "large",
    type: "rating",
  },
  {
    title: "Trending Now",
    movies: [
      { id: 16, title: "Locke & Key", imageUrl: "/movies/movie11.jpg", rating: 8.7},
      { id: 17, title: "Dark", imageUrl: "/movies/movie3.jpg", rating: 9.0},
      { id: 18, title: "The Umbrella Academy", imageUrl: "/movies/movie12.jpg", rating: 8.0},
      { id: 19, title: "Shadow and Bone", imageUrl: "/movies/movie13.jpg", rating: 8.5},
      { id: 20, title: "The Society", imageUrl: "/movies/movie14.jpg", rating: 7.5},
    ],
    size: "large",
    type: "rating",
  },
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
