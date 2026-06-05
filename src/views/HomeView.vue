<template>
  <main class="max-w-4xl mx-auto px-6 py-20">
    <!-- Secção de Apresentação -->
    <section class="space-y-6">
      <h1 class="text-4xl md:text-6xl font-black tracking-tight text-white">
        Olá, sou o <span class="text-teal-400">António Figueiras</span>.
      </h1>
      <p class="text-xl text-slate-400 font-medium">
        Software Engineer & Web Developer baseado em Leiria.
      </p>
      <div class="text-slate-400 space-y-4 max-w-2xl leading-relaxed">
        <p>
          A terminar a Licenciatura em Engenharia Informática no IPLeiria (regime pós-laboral), com
          foco na construção de aplicações web funcionais, reativas e de alta performance.
        </p>
        <p>
          Quando não estou a explorar novas arquiteturas e tecnologias, assumo a presidência de uma
          Associação de Jovens local, gerindo equipas e projetos comunitários.
        </p>
      </div>

      <div class="pt-6 flex gap-4">
        <a
          href="mailto:teu_email@gmail.com"
          class="bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold px-6 py-3 rounded-lg transition-colors"
        >
          Contactar
        </a>
        <a
          href="https://github.com/antoniofigueiras"
          target="_blank"
          class="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-lg border border-slate-700 transition-colors"
        >
          GitHub
        </a>
      </div>
    </section>

    <!-- Secção de Tech Stack -->
    <section class="mt-24">
      <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
        <span class="text-teal-400 mr-3">⚡</span> O Meu Canivete Suíço
      </h2>
      <div class="flex flex-wrap gap-3">
        <span
          v-for="tech in techStack"
          :key="tech"
          class="bg-slate-800 border border-slate-700 text-teal-300 font-medium px-4 py-2 rounded-lg text-sm shadow-sm hover:border-teal-500/50 hover:bg-slate-700 transition-all cursor-default"
        >
          {{ tech }}
        </span>
      </div>
    </section>

    <!-- NOVA Secção: Projetos -->
    <section class="mt-24">
      <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
        <span class="text-teal-400 mr-3">🚀</span> Projetos em Destaque
      </h2>

      <!-- Grelha responsiva: 1 coluna no telemóvel, 2 colunas em ecrãs maiores -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- O Vue faz a magia aqui: repete o componente para cada projeto no JSON -->
        <ProjectCard v-for="project in projectsData" :key="project.id" :project="project" />
      </div>
    </section>
  </main>
</template>

<script setup>
// 1. Importamos o componente do cartão
import ProjectCard from '../components/ProjectCard.vue'
// 2. Importamos a nossa "base de dados" local
import projectsData from '../data/projects.json'

const techStack = [
  'Vue 3',
  'JavaScript (ES6+)',
  'Tailwind CSS',
  'PHP',
  'MySQL',
  'Git / GitHub',
  'Metodologias Ágeis',
]
</script>
