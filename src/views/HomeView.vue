<template>
  <main class="max-w-4xl mx-auto px-6 pb-20 pt-10">
    <!-- Secção de Apresentação (Mantém-se igual) -->
    <section class="space-y-6">
      <h1 class="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
        Olá, sou o <span class="text-indigo-600 dark:text-indigo-400">António Figueiras</span>.
      </h1>
      <p class="text-xl text-zinc-600 dark:text-zinc-300 font-medium">
        Software Engineer & Web Developer
      </p>
      <div class="text-zinc-600 dark:text-zinc-400 space-y-4 max-w-2xl leading-relaxed">
        <p>
          Sou estudante finalista de Engenharia Informática no IPLeiria, focado na construção de
          aplicações web modernas, escaláveis e de alta performance.
        </p>
        <p>
          Gosto de traduzir problemas complexos de negócio em código limpo e interfaces intuitivas.
          Mais do que dominar frameworks, o meu objetivo é entregar produtos robustos com uma boa
          arquitetura de software por trás.
        </p>
      </div>

      <div class="pt-6 flex gap-4">
        <a
          href="mailto:antoniorfigueiras@gmail.com"
          class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-lg shadow-lg shadow-indigo-500/20 transition-all"
        >
          Falar comigo
        </a>
        <a
          href="https://github.com/antoniorfigueiras"
          target="_blank"
          class="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white font-bold px-6 py-3 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm transition-all"
        >
          Ver GitHub
        </a>
      </div>
    </section>

    <!-- Secção de Tech Stack (Mantém-se igual) -->
    <section class="mt-24">
      <h2 class="text-2xl font-bold text-zinc-900 dark:text-white mb-6">Stack & Ferramentas</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          class="p-5 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 rounded-xl hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-colors shadow-sm"
        >
          <h3
            class="text-indigo-600 dark:text-indigo-400 font-semibold mb-4 text-sm uppercase tracking-wider"
          >
            Frontend
          </h3>
          <ul class="text-zinc-600 dark:text-zinc-400 space-y-2 text-sm">
            <li>Vue 3 (Composition API)</li>
            <li>JavaScript (ES6+)</li>
            <li>Tailwind CSS / HTML5</li>
          </ul>
        </div>

        <div
          class="p-5 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 rounded-xl hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-colors shadow-sm"
        >
          <h3
            class="text-indigo-600 dark:text-indigo-400 font-semibold mb-4 text-sm uppercase tracking-wider"
          >
            Backend
          </h3>
          <ul class="text-zinc-600 dark:text-zinc-400 space-y-2 text-sm">
            <li>PHP</li>
            <li>MySQL / Bases de Dados</li>
            <li>RESTful APIs</li>
          </ul>
        </div>

        <div
          class="p-5 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 rounded-xl hover:border-indigo-500/30 dark:hover:border-indigo-500/30 transition-colors shadow-sm"
        >
          <h3
            class="text-indigo-600 dark:text-indigo-400 font-semibold mb-4 text-sm uppercase tracking-wider"
          >
            Tools & Workflow
          </h3>
          <ul class="text-zinc-600 dark:text-zinc-400 space-y-2 text-sm">
            <li>Git & GitHub</li>
            <li>Vite</li>
            <li>Metodologias Ágeis</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Secção: Projetos com Filtros -->
    <section class="mt-24">
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <h2 class="text-2xl font-bold text-zinc-900 dark:text-white">Projetos em Destaque</h2>

        <!-- Botões de Filtro -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="filter in availableFilters"
            :key="filter"
            @click="activeFilter = filter"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
              activeFilter === filter
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-500/50 dark:hover:border-indigo-500/50',
            ]"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <!-- Grelha Reativa -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- O v-for agora percorre os projetos filtrados e tem uma pequena animação do Vue -->
        <TransitionGroup name="list">
          <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
        </TransitionGroup>
      </div>

      <!-- Mensagem caso um filtro não tenha projetos (apenas por segurança) -->
      <div
        v-if="filteredProjects.length === 0"
        class="text-center py-12 text-zinc-500 dark:text-zinc-400"
      >
        Nenhum projeto encontrado nesta categoria.
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import projectsData from '../data/projects.json'

// Estado reativo que guarda qual é o filtro selecionado no momento
const activeFilter = ref('Todos')

// Lê o JSON, extrai o campo "type" de cada projeto e remove os duplicados
const availableFilters = computed(() => {
  const types = projectsData.map((project) => project.type)
  const uniqueTypes = [...new Set(types)]
  return ['Todos', ...uniqueTypes]
})

// Propriedade calculada que atualiza a grelha automaticamente sempre que o botão muda
const filteredProjects = computed(() => {
  if (activeFilter.value === 'Todos') {
    return projectsData
  }
  return projectsData.filter((project) => project.type === activeFilter.value)
})
</script>

<style scoped>
/* Animação suave quando os projetos entram e saem da grelha */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(15px);
}
.list-leave-active {
  position: absolute;
  visibility: hidden;
}
</style>
