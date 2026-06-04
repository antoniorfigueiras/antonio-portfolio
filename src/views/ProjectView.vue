<template>
  <main class="max-w-4xl mx-auto px-6 py-20">
    <!-- Se o projeto existir, mostra os detalhes -->
    <div v-if="project" class="animate-fade-in">
      <RouterLink
        to="/"
        class="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center gap-2 mb-8 transition-colors"
      >
        &larr; Voltar ao Início
      </RouterLink>

      <div class="space-y-6">
        <span
          class="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 border border-teal-500/20 rounded-full text-sm font-bold tracking-wide"
        >
          {{ project.type }}
        </span>

        <h1 class="text-4xl md:text-5xl font-black text-white tracking-tight">
          {{ project.title }}
        </h1>

        <div class="flex flex-wrap gap-3 pt-4">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="bg-slate-800 border border-slate-700 text-slate-300 font-medium px-4 py-2 rounded-lg text-sm"
          >
            {{ tech }}
          </span>
        </div>

        <div class="pt-10">
          <h2 class="text-2xl font-bold text-white mb-4">Sobre o Projeto</h2>
          <p class="text-lg text-slate-400 leading-relaxed">
            {{ project.description }}
          </p>

          <!-- Caixa de Status de Desenvolvimento -->
          <div class="mt-12 p-6 bg-slate-800/40 border border-slate-700 rounded-xl">
            <h3 class="text-lg font-bold text-white mb-3">Ponto de Situação</h3>
            <p class="text-slate-300 flex items-center gap-3">
              <span class="w-3 h-3 rounded-full bg-amber-500 animate-pulse"></span>
              {{ project.status }} — Em breve disponibilizarei o código-fonte (GitHub) e a versão
              live.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Se houver um erro de URL (projeto não existe) -->
    <div v-else class="text-center py-32">
      <h2 class="text-3xl font-bold text-white mb-4">Projeto não encontrado</h2>
      <p class="text-slate-400 mb-8">
        O link que tentaste aceder parece estar quebrado ou o projeto foi movido.
      </p>
      <RouterLink
        to="/"
        class="bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold px-6 py-3 rounded-lg transition-colors"
      >
        Voltar à página inicial
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import projectsData from '../data/projects.json'

// O useRoute permite-nos aceder ao URL atual
const route = useRoute()

// O computed garante que, se o URL mudar, os dados atualizam imediatamente
const project = computed(() => {
  // Converte o ID do URL (que é uma string) para número e procura no JSON
  return projectsData.find((p) => p.id === parseInt(route.params.id))
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
