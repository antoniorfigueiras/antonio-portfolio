<template>
  <div class="w-full">
    <div
      class="mb-8 flex items-center gap-3 font-mono text-sm bg-zinc-100 dark:bg-zinc-900/50 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm"
    >
      <span class="text-indigo-600 dark:text-indigo-400 font-bold">~</span>
      <span class="text-zinc-600 dark:text-zinc-400">$</span>
      <span class="text-zinc-900 dark:text-zinc-100 font-medium"
        >git log --oneline --graph --career</span
      >
    </div>

    <div
      class="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 space-y-10 py-4 font-mono"
    >
      <div v-for="(commit, index) in commits" :key="index" class="relative pl-10 group">
        <div
          class="absolute w-4 h-4 bg-zinc-200 dark:bg-zinc-800 border-2 border-indigo-500 rounded-full -left-[9px] top-1.5 ring-4 ring-zinc-50 dark:ring-zinc-950 group-hover:bg-indigo-500 group-hover:scale-125 transition-all duration-300"
        ></div>

        <div class="flex flex-col gap-1.5">
          <div class="flex items-center gap-3 flex-wrap">
            <span class="text-amber-600 dark:text-amber-500 font-bold text-sm">{{
              commit.hash
            }}</span>
            <span class="text-zinc-500 dark:text-zinc-500 text-xs tracking-widest uppercase">{{
              commit.date
            }}</span>
          </div>

          <p class="text-zinc-900 dark:text-white text-base font-sans font-medium mt-1">
            <span class="text-indigo-600 dark:text-indigo-400 font-mono text-sm mr-2">{{
              commit.action
            }}</span>
            {{ commit.message }}
          </p>

          <p
            v-if="commit.description"
            class="text-zinc-600 dark:text-zinc-400 text-sm font-sans mt-2 leading-relaxed"
          >
            {{ commit.description }}
          </p>

          <div v-if="commit.skills && commit.skills.length" class="flex flex-wrap gap-2 mt-3">
            <span
              v-for="skill in commit.skills"
              :key="skill"
              class="text-xs font-sans font-medium bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 px-2 py-1 rounded border border-zinc-200 dark:border-zinc-700"
            >
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Aqui geres a tua linha temporal. O mais recente fica no topo.
const commits = [
  {
    hash: 'HEAD',
    date: '2026',
    action: 'feat:',
    message: 'Engenharia Informática (Fase Final)',
    description:
      'A concluir a Licenciatura no IPLeiria. Foco atual no desenvolvimento Full-Stack, integração de APIs REST e arquiteturas web escaláveis, preparando a entrada a full-time no mercado de trabalho.',
    skills: [
      'Vue.js',
      'React.js',
      'C',
      'Arquitetura Web',
      'APIs REST',
      'Desenvolvimento Full-Stack',
      'Java',
      'Python',
      'Docker',
      'Algoritmos e Estruturas de Dados',
    ],
  },
  {
    hash: 'a1b2c3d',
    date: '2025 - Presente',
    action: 'merge:',
    message: 'Presidente da Associação Musical da Juventude Académica de Leiria',
    description:
      'Coordenação geral da associação e liderança de equipas multidisciplinares. Fui o principal responsável pelo planeamento de orçamentos, organização de eventos académicos e otimização de toda a logística operacional.',
    skills: ['Gestão de Equipas', 'Liderança', 'Planeamento Estratégico'],
  },
  {
    hash: 'e4f5g6h',
    date: 'Fev 2023 - Jul 2023',
    action: 'build:',
    message: 'Software Development Intern @ Poço - Equipamentos Industriais',
    description:
      'Desenvolvimento de aplicações web (Front e Back Office) a partir do zero para a digitalização de fluxos de trabalho internos. Estruturação de bases de dados relacionais e garantia da estabilidade do software.',
    skills: ['PHP', 'MySQL', 'Web Development', 'Debugging'],
  },
  {
    hash: 'c4d5e6f',
    date: '2021 - 2023',
    action: 'checkout:',
    message: 'CTeSP em Programação de Sistemas de Informação',
    description:
      'Formação superior técnica focada na aplicação prática de código. Aprofundamento em programação web server-side, acessos mobile.',
    skills: ['Java', 'Server-Side Web', 'Mobile Access'],
  },
  {
    hash: 'b2c3d4e',
    date: '2018 - 2019',
    action: 'fix:',
    message: 'IT Support Intern @ Scalmática',
    description:
      'A primeira experiência no mundo do trabalho, realizada durante o curso profissional. Foco em suporte técnico direto ao cliente, resolução de problemas de hardware/software e configuração de sistemas POS.',
    skills: ['IT Support', 'Hardware Troubleshooting', 'Sistemas POS'],
  },
  {
    hash: 'init000',
    date: '2016 - 2019',
    action: 'init:',
    message: 'Curso Profissional de Sistemas Informáticos',
    description:
      'O verdadeiro ponto de partida no ensino secundário. Onde aprendi lógica de programação, escrevi as primeiras linhas de código e criei as bases para seguir a via de Engenharia.',
    skills: ['Lógica de Programação', 'Redes', 'Bases de Dados'],
  },
]
</script>
