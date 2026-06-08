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
          Sou estudante finalista de Engenharia Informática no Politécnico de Leiria. Mais do que
          decorar a framework do momento, o meu foco é perceber como o software funciona de ponta a
          ponta — desde o desenho da base de dados e da API, até à interface que o utilizador final
          vai usar.
        </p>
        <p>
          Ao longo do curso, habituei-me a meter as mãos na massa com ecossistemas reais: a
          desenvolver aplicações web e mobile, a lidar com problemas de segurança e a colocar código
          a correr em infraestruturas como Docker e Kubernetes. Gosto de resolver problemas e de
          fazer as coisas bem feitas.
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
      <div class="mb-8">
        <h2 class="text-2xl font-bold text-zinc-900 dark:text-white">Ecossistema & Tecnologias</h2>
        <p class="text-zinc-600 dark:text-zinc-400 mt-2 text-sm max-w-2xl">
          Conjunto de tecnologias, linguagens e ferramentas que utilizo no desenho e implementação
          de arquiteturas escaláveis.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="group p-6 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 p-4 opacity-10 dark:opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform"
          >
            <svg class="w-20 h-20 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <h3
            class="flex items-center text-indigo-600 dark:text-indigo-400 font-bold mb-5 text-sm uppercase tracking-widest relative z-10"
          >
            <span class="w-8 h-px bg-indigo-500/50 mr-3"></span> Frontend & Mobile
          </h3>
          <ul class="text-zinc-600 dark:text-zinc-300 space-y-3 text-sm font-medium relative z-10">
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span> Vue.js 3 / Nuxt.js
              (SPA & SSR)
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span> Kotlin (Android
              Native / ViewBinding)
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span> Tailwind CSS &
              Shadcn Vue
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span> JavaScript (ES6+) &
              TypeScript
            </li>
          </ul>
        </div>

        <div
          class="group p-6 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 p-4 opacity-10 dark:opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform"
          >
            <svg
              class="w-20 h-20 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
              />
            </svg>
          </div>
          <h3
            class="flex items-center text-indigo-600 dark:text-indigo-400 font-bold mb-5 text-sm uppercase tracking-widest relative z-10"
          >
            <span class="w-8 h-px bg-indigo-500/50 mr-3"></span> Backend & Data
          </h3>
          <ul class="text-zinc-600 dark:text-zinc-300 space-y-3 text-sm font-medium relative z-10">
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span> Jakarta EE (Java) /
              Laravel (PHP)
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span> Node.js / Bun
              (WebSockets em TR)
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span> PostgreSQL & MySQL
              (Relacional)
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span> Arquitetura RESTful
              & Microsserviços
            </li>
          </ul>
        </div>

        <div
          class="group p-6 bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/80 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 p-4 opacity-10 dark:opacity-20 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform"
          >
            <svg
              class="w-20 h-20 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <h3
            class="flex items-center text-indigo-600 dark:text-indigo-400 font-bold mb-5 text-sm uppercase tracking-widest relative z-10"
          >
            <span class="w-8 h-px bg-indigo-500/50 mr-3"></span> DevOps & QA
          </h3>
          <ul class="text-zinc-600 dark:text-zinc-300 space-y-3 text-sm font-medium relative z-10">
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span> Docker & Kubernetes
              (Orquestração)
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span> Katalon Studio &
              Appium (Testes Auto)
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span> Git Flow & Pull
              Requests (Git)
            </li>
            <li class="flex items-center">
              <span class="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span> Jira (Scrum / BDD
              User Stories)
            </li>
          </ul>
        </div>
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
        Procuras reforçar a equipa?
      </h2>
      <p class="text-zinc-600 dark:text-zinc-400 max-w-lg mx-auto mb-8 leading-relaxed">
        Estou na reta final da licenciatura e à procura da oportunidade certa para iniciar a minha
        carreira. Quero integrar um projeto onde possa aprender com malta mais experiente e
        contribuir com bom código desde o primeiro dia. Se o meu perfil faz sentido para a tua
        empresa, vamos falar!
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
