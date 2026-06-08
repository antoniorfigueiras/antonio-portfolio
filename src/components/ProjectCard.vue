<template>
  <a
    :href="project.github_url"
    target="_blank"
    rel="noopener noreferrer"
    class="flex flex-col h-full bg-zinc-50 dark:bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all duration-300 shadow-sm hover:shadow-md group cursor-pointer"
  >
    <div
      class="relative bg-zinc-100 dark:bg-zinc-950 h-56 flex items-center justify-center overflow-hidden"
    >
      <img
        v-if="project.images && project.images.length > 0"
        :src="project.images[0]"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div
        v-else
        class="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-950 flex flex-col items-center justify-center p-4 border-b border-zinc-200 dark:border-zinc-800/50"
      >
        <svg
          class="w-10 h-10 text-zinc-400 dark:text-zinc-600 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span class="text-xs font-mono text-zinc-400 dark:text-zinc-500"
          >Repository Live on GitHub</span
        >
      </div>

      <span
        class="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md z-10"
        :class="{
          'bg-green-500/20 text-green-600 dark:text-green-400 border border-green-500/30':
            project.status === 'Concluído',
          'bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30':
            project.status === 'Em produção',
        }"
      >
        {{ project.status }}
      </span>
    </div>

    <div class="flex flex-col flex-grow p-6">
      <div class="flex-1">
        <span
          class="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400"
        >
          {{ project.type }}
        </span>
        <h3
          class="text-xl font-bold text-zinc-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
        >
          {{ project.title }}
        </h3>
        <p class="text-sm text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
          {{ project.description }}
        </p>
      </div>

      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800/60 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/40"
        >
          {{ tech }}
        </span>
      </div>

      <div
        class="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between"
      >
        <span
          class="inline-flex items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline"
        >
          Ver projeto no GitHub
          <svg
            class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
      </div>
    </div>
  </a>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>
