<template>
  <button
    @click="toggleLang"
    class="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-bold uppercase tracking-wider hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
  >
    {{ lang === 'pt' ? 'EN' : 'PT' }}
  </button>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'
const { lang, toggleLang } = useI18n()
</script>
