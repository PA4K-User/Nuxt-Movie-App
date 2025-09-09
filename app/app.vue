<template lang="">
  <div class="min-h-screen bg-netflix-dark text-white font-sans overflow-x-hidden">
    <AppHeader />
    <AppHero :featured="featuredContent"/>
  </div>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import AOS from "aos"
import "aos/dist/aos.css"
import AppHeader from './components/header.vue'
import AppHero from './components/hero.vue'

const featuredContent = ref({
  title:'Stranger Things',
  description: `When a young boy vanishes,a small town oncovers a mystery involving secret experiments,
  terrifying supernatural forces and one strange little girl.`,
  imageUrl:'/hero.jpg',
  genres:['Sci-Fi', 'Horror', 'Drama'],
  year:2016,
  seasons:4,
  rating:8.7
})

onMounted(() => {
   AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,  
      offset: 100   
    })
})
</script>