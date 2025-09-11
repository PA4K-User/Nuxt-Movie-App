<template>
  <div
    class="relative group transition-all duration-300 hover:scale-105 hover:z-10"
    data-aos="fade-up"
  >
    <img
      :src="movie.imageUrl"
      :alt="movie.title"
      :class="`${sizes[size] || sizes.large} object-cover rounded transition-all duration-300 group-hover:rounded-b-none`"
    />
    <div
      class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
    >
      <h3 class="text-white font-bold truncate">{{ movie.title }}</h3>

      <!-- Action buttons -->
      <div
        class="flex items-center mt-2 space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <button
          class="bg-netflix-red p-2 rounded-full hover:bg-netflix-red/80 transition"
        >
          <Icon icon="mdi:play" width="20" />
        </button>
        <button
          class="border border-white/50 p-2 rounded-full hover:border-white transition"
        >
          <Icon icon="mdi:plus" width="20" />
        </button>
        <button
          class="border border-white/50 p-2 rounded-full hover:border-white transition"
        >
          <Icon icon="mdi:thumb-up-outline" width="20" />
        </button>
      </div>

      <!-- Meta info -->
      <div
        class="flex items-center mt-2 text-gray-300 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span class="text-green-500 font-bold">98% Match</span>
        <span>TV-MA</span>
        <span>2 Seasons</span>
      </div>

      <!-- Tags -->
      <div
        class="flex items-center mt-1 gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      >
        <span class="text-xs px-1.5 py-0.5 bg-gray-800/80 rounded">Exciting</span>
        <span class="text-xs px-1.5 py-0.5 bg-gray-800/80 rounded">Sci-Fi</span>
        <span class="text-xs px-1.5 py-0.5 bg-gray-800/80 rounded">Teen</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

defineProps({
  movie: {
    type: Object,
    required: true,
  },
  size: {
    type: String,
    default: "medium",
  },
});

const sizes = {
  small: "w-[160px] h-[240px]",   // 160x240
  medium: "w-[200px] h-[320px]",  // 200x320
  large: "w-[240px] h-[360px]",   // 240x360
};
</script>
