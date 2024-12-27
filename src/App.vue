<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div class="mb-14 flex items-center justify-center gap-x-6">
    <a href="https://vite.dev" target="_blank">
      <img
        src="/vite.svg"
        class="h-24 p-2 transition-[filter] hover:drop-shadow-[0_0_2em_#646cffaa]"
        alt="Vite logo"
      />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img
        src="./assets/vue.svg"
        class="h-24 p-2 transition-[filter] hover:drop-shadow-[0_0_2em_#42b883aa]"
        alt="Vue logo"
      />
    </a>
    <a href="https://tailwindcss.com/" target="_blank">
      <img
        src="./assets/tailwind.svg"
        class="h-20 p-2 transition-[filter] hover:drop-shadow-[0_0_2em_#38bdf8aa]"
        alt="Tailwind logo"
      />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + Tailwind" />
</template>
