<template>
  <main class="max-w-4xl mx-auto px-6 pb-20 pt-10">
    <!-- Secção de Apresentação -->
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

    <!-- Secção de Tech Stack -->
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

    <!-- Secção: Percurso (Git Tree) -->
    <section class="mt-24">
      <h2 class="text-2xl font-bold text-zinc-900 dark:text-white mb-8">Percurso & Experiência</h2>
      <div
        class="bg-white dark:bg-zinc-900/30 p-6 md:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 shadow-sm"
      >
        <GitTree />
      </div>
    </section>

    <!-- Secção: Projetos com Filtros -->
    <section class="mt-24">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <h2 class="text-2xl font-bold text-zinc-900 dark:text-white">Projetos em Destaque</h2>

        <!-- Lista Suspensa (Dropdown) -->
        <div class="relative w-full sm:w-auto">
          <select
            v-model="activeFilter"
            class="w-full sm:w-64 appearance-none bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 py-2.5 pl-4 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-colors cursor-pointer font-medium text-sm shadow-sm"
          >
            <option v-for="filter in availableFilters" :key="filter" :value="filter">
              {{ filter }}
            </option>
          </select>
          <!-- Ícone da seta desenhado à mão para sobrepor o default do browser -->
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <!-- Grelha Reativa -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TransitionGroup name="list">
          <ProjectCard v-for="project in displayedProjects" :key="project.id" :project="project" />
        </TransitionGroup>
      </div>

      <!-- Feedback caso o filtro não encontre projetos -->
      <div
        v-if="displayedProjects.length === 0"
        class="text-center py-12 text-zinc-500 dark:text-zinc-400"
      >
        Nenhum projeto encontrado nesta categoria.
      </div>

      <!-- Botão Carregar Mais -->
      <div v-if="hasMoreProjects" class="mt-10 flex justify-center">
        <button
          @click="loadMore"
          class="px-6 py-3 bg-zinc-100 dark:bg-zinc-800/50 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-sm rounded-lg border border-zinc-200 dark:border-zinc-700 transition-colors shadow-sm"
        >
          Mostrar mais projetos
        </button>
      </div>
    </section>
    <!-- Secção: Call to Action (Contacto) -->
    <section class="mt-32 mb-10 text-center">
      <div
        class="inline-block mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl text-indigo-600 dark:text-indigo-400"
      >
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      </div>
      <h2 class="text-3xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
        Pronto para o próximo desafio?
      </h2>
      <p class="text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto mb-8 leading-relaxed">
        Estou sempre à procura de equipas de alto rendimento onde possa aplicar os meus
        conhecimentos em engenharia de software e continuar a evoluir. Vamos conversar?
      </p>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="mailto:antoniorfigueiras@gmail.com"
          class="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3.5 rounded-lg shadow-lg shadow-indigo-500/20 transition-all text-center"
        >
          Enviar Email
        </a>
        <a
          href="https://linkedin.com/in/antonio-figueiras-dev"
          target="_blank"
          class="w-full sm:w-auto bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-bold px-8 py-3.5 rounded-lg border border-zinc-200 dark:border-zinc-700 transition-all text-center"
        >
          Conectar no LinkedIn
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import GitTree from '../components/GitTree.vue'
import projectsData from '../data/projects.json'

// Filtros
const activeFilter = ref('Todos')
const availableFilters = computed(() => {
  const types = projectsData.map((project) => project.type)
  const uniqueTypes = [...new Set(types)]
  return ['Todos', ...uniqueTypes]
})

// Paginação (Limite inicial)
const visibleCount = ref(4)

// Projetos filtrados por categoria
const filteredProjects = computed(() => {
  if (activeFilter.value === 'Todos') {
    return projectsData
  }
  return projectsData.filter((project) => project.type === activeFilter.value)
})

// Projetos que vão efetivamente aparecer no ecrã (limitados pelo visibleCount)
const displayedProjects = computed(() => {
  return filteredProjects.value.slice(0, visibleCount.value)
})

// Verifica se há mais projetos escondidos para mostrar o botão
const hasMoreProjects = computed(() => {
  return visibleCount.value < filteredProjects.value.length
})

// Adiciona +4 projetos à vista ao clicar
const loadMore = () => {
  visibleCount.value += 4
}

// Reset ao contador sempre que se muda a categoria no Dropdown
watch(activeFilter, () => {
  visibleCount.value = 4
})
</script>

<style scoped>
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
