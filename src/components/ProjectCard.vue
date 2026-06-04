<template>
  <div
    class="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-teal-500/50 transition-colors flex flex-col h-full group"
  >
    <div class="mb-4">
      <span class="text-xs font-bold text-teal-400 uppercase tracking-wider">{{
        project.type
      }}</span>
      <h3 class="text-xl font-bold text-white mt-1 group-hover:text-teal-300 transition-colors">
        {{ project.title }}
      </h3>
    </div>

    <p class="text-slate-400 text-sm flex-grow mb-6 leading-relaxed">
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

    <!-- Rodapé do Cartão: Como estão em planeamento, mostramos o status em vez de botões -->
    <div class="mt-auto pt-4 border-t border-slate-700">
      <span class="text-sm text-slate-500 italic flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
        {{ project.status }}
      </span>
    </div>
  </div>
</template>

<script setup>
// Dizemos ao componente que ele VAI receber um objeto chamado "project"
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>
