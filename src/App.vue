<script setup>
import TerminalSecret from './components/TerminalSecret.vue'
import { onMounted, ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const isDark = ref(true)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

onMounted(() => {
  if (
    localStorage.theme === 'light' ||
    (!('theme' in localStorage) && !window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  } else {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<template>
  <!-- Adicionámos flex e flex-col para empurrar o footer para o fundo -->
  <div
    class="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300"
  >
    <!-- Navbar Oficial -->
    <header
      class="sticky top-0 z-50 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300"
    >
      <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center w-full">
        <RouterLink
          to="/"
          class="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white"
        >
          AF<span class="text-indigo-600 dark:text-indigo-500">.</span>
        </RouterLink>

        <button
          @click="toggleTheme"
          class="p-2.5 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 transition-all focus:outline-none"
          aria-label="Alternar Tema"
        >
          <span v-if="isDark" class="block text-xl">☀️</span>
          <span v-else class="block text-xl">🌙</span>
        </button>
      </div>
    </header>

    <!-- flex-grow garante que o conteúdo empurra o footer para baixo -->
    <div class="flex-grow">
      <RouterView />
    </div>

    <!-- Novo Footer Minimalista -->
    <footer
      class="border-t border-zinc-200 dark:border-zinc-800/80 mt-12 py-8 transition-colors duration-300"
    >
      <div
        class="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400"
      >
        <p>
          &copy; {{ new Date().getFullYear() }} António Figueiras. Todos os direitos reservados.
        </p>
        <div class="flex gap-4">
          <a
            href="https://github.com/antoniorfigueiras"
            target="_blank"
            class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:antoniorfigueiras@gmail.com"
            class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
    <TerminalSecret />
  </div>
</template>
