<script setup lang="ts">
import { useCountState } from '../composables/countState';

const { count, incrementCount } = useCountState();

defineProps<{ msg: string }>();
</script>

<template>
  <h1 class="mb-8 text-5xl font-bold">{{ msg }}</h1>

  <div class="mb-8 p-8">
    <button class="button mb-4" type="button" @click="incrementCount()">
      count is {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code>
      to test HMR
    </p>
  </div>

  <p class="leading-10">
    Check out
    <a
      class="link"
      href="https://vuejs.org/guide/quick-start.html#local"
      target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p class="leading-10">
    Learn more about IDE Support for Vue in the
    <a
      class="link"
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="leading-10 text-zinc-500">
    Click on the Vite, Vue and Tailwind logos to learn more
  </p>
</template>
