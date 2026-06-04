<template>
  <!-- Usamos o RouterLink para envolver todo o cartão. O hover:-translate-y-2 faz o cartão "levantar" -->
  <RouterLink
    :to="`/projeto/${project.id}`"
    class="bg-slate-800/50 border border-slate-700 rounded-xl p-6 transition-all duration-300 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-2 flex flex-col h-full group cursor-pointer block"
  >
    <div class="mb-4">
      <span class="text-xs font-bold text-teal-400 uppercase tracking-wider">{{
        project.type
      }}</span>
      <h3 class="text-xl font-bold text-white mt-1 group-hover:text-teal-300 transition-colors">
        {{ project.title }}
      </h3>
    </div>

    <p class="text-slate-400 text-sm flex-grow mb-6 leading-relaxed line-clamp-3">
      {{ project.description }}
    </p>

    <div class="mb-6 flex flex-wrap gap-2">
      <span
        v-for="tech in project.tech"
        :key="tech"
        class="text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700 px-2 py-1 rounded"
      >
        {{ tech }}
      </span>
    </div>

    <div class="mt-auto pt-4 border-t border-slate-700 flex justify-between items-center">
      <span class="text-sm text-slate-500 italic flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
        {{ project.status }}
      </span>
      <span
        class="text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm font-medium"
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
