<template>
  <main class="max-w-3xl mx-auto px-6 py-12 md:py-20 flex-grow w-full">
    <!-- Botão de Voltar -->
    <button
      @click="router.push('/')"
      class="mb-12 flex items-center gap-2 text-zinc-500 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400 transition-colors font-medium"
    >
      &larr; Voltar ao Portfólio
    </button>

    <!-- Estado: Projeto Encontrado -->
    <article v-if="project" class="space-y-8 animate-fade-in">
      <!-- Cabeçalho do Projeto -->
      <header class="space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div class="flex items-center gap-3">
          <span
            class="text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider"
          >
            {{ project.type }}
          </span>
          <span class="text-zinc-300 dark:text-zinc-700">&bull;</span>
          <span class="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            {{ project.status }}
          </span>
        </div>

        <h1 class="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
          {{ project.title }}
        </h1>
      </header>

      <!-- Tecnologias -->
      <section>
        <h3
          class="text-sm font-semibold text-zinc-900 dark:text-white mb-3 uppercase tracking-wider"
        >
          Stack Tecnológica
        </h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.tech"
            :key="tech"
            class="text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 rounded-md"
          >
            {{ tech }}
          </span>
        </div>
      </section>

      <!-- Descrição Detalhada -->
      <section class="prose prose-zinc dark:prose-invert max-w-none pt-4">
        <p class="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {{ project.description }}
        </p>

        <!-- Aqui no futuro podes adicionar mais campos ao JSON, como "longDescription", "challenges", etc. -->
        <div
          class="mt-8 p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl"
        >
          <h4 class="text-zinc-900 dark:text-white font-bold mb-2">O Desafio</h4>
          <p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
            Esta secção está pronta para receberes dados mais detalhados do teu JSON no futuro. Por
            agora, serve para mostrar como estruturar a arquitetura de informação de um *case study*
            individual.
          </p>
        </div>
      </section>
    </article>

    <!-- Estado: Projeto Não Encontrado -->
    <div v-else class="text-center py-20">
      <h2 class="text-2xl font-bold text-zinc-900 dark:text-white mb-4">Projeto não encontrado</h2>
      <p class="text-zinc-600 dark:text-zinc-400 mb-8">
        O URL que tentaste aceder não corresponde a nenhum projeto ativo.
      </p>
      <button
        @click="router.push('/')"
        class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
      >
        Regressar à Home
      </button>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import projectsData from '../data/projects.json'

const route = useRoute()
const router = useRouter()

// Vai procurar ao JSON o projeto cujo ID bata certo com o ID que está no URL
const project = computed(() => {
  return projectsData.find((p) => p.id === parseInt(route.params.id) || p.id === route.params.id)
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
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
