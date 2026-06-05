<template>
  <RouterLink
    :to="`/projeto/${project.id}`"
    class="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 transition-all duration-300 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-2 flex flex-col h-full group cursor-pointer block"
  >
    <div class="mb-4">
      <span
        class="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider"
        >{{ project.type }}</span
      >
      <h3
        class="text-xl font-bold text-zinc-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
      >
        {{ project.title }}
      </h3>
    </div>

    <p class="text-zinc-600 dark:text-zinc-400 text-sm flex-grow mb-6 leading-relaxed line-clamp-3">
      {{ project.description }}
    </p>

    <div class="mb-6 flex flex-wrap gap-2">
      <span
        v-for="tech in project.tech"
        :key="tech"
        class="text-xs font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-2 py-1 rounded"
      >
        {{ tech }}
      </span>
    </div>

    <div
      class="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-between items-center transition-colors"
    >
      <span class="text-sm text-zinc-500 dark:text-zinc-500 italic flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
        {{ project.status }}
      </span>
      <span
        class="text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm font-medium"
      >
        Ver detalhes &rarr;
      </span>
    </div>
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>
