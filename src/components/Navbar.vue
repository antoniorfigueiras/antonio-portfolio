<template>
  <header class="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
    <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
      <RouterLink
        to="/"
        class="text-2xl font-black tracking-tighter text-white hover:text-teal-400 transition-colors"
      >
        AF<span class="text-teal-400">.</span>
      </RouterLink>

      <nav class="flex gap-6 text-sm font-medium text-slate-300 items-center">
        <RouterLink to="/" class="hover:text-white transition-colors">Início</RouterLink>
        <a
          href="https://github.com/antoniorfigueiras"
          target="_blank"
          class="hover:text-teal-400 transition-colors"
        >
          GitHub
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
