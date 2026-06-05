<template>
  <div>
    <!-- Botão Flutuante Discreto -->
    <button
      @click="isOpen = !isOpen"
      class="fixed bottom-6 right-6 w-12 h-12 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 rounded-full shadow-xl flex items-center justify-center font-mono font-bold text-lg hover:scale-110 transition-transform z-50 border-2 border-zinc-700 dark:border-zinc-300"
      title="Abrir Terminal (Ctrl + `)"
    >
      >_
    </button>

    <!-- Janela do Terminal -->
    <div
      v-if="isOpen"
      class="fixed bottom-24 right-6 w-[90vw] md:w-96 h-80 bg-zinc-950/95 backdrop-blur-md border border-zinc-800 rounded-xl text-zinc-300 font-mono text-sm z-50 flex flex-col shadow-2xl overflow-hidden"
    >
      <!-- Cabeçalho da Janela -->
      <div class="flex justify-between items-center bg-zinc-900 px-4 py-2 border-b border-zinc-800">
        <span class="text-zinc-400 text-xs tracking-widest">antonio@portfolio:~</span>
        <button @click="isOpen = false" class="text-zinc-500 hover:text-red-400 transition-colors">
          &#10005;
        </button>
      </div>

      <!-- Corpo do Terminal -->
      <div class="flex-1 overflow-y-auto p-4 space-y-2" ref="terminalBody">
        <!-- Histórico de Comandos -->
        <div v-for="(line, idx) in history" :key="idx" class="leading-relaxed" v-html="line"></div>

        <!-- Linha de Input -->
        <div class="flex items-center gap-2 mt-2">
          <span class="text-indigo-500 font-bold">➜</span>
          <span class="text-amber-500 font-bold">~</span>
          <input
            v-model="cmd"
            @keydown.enter="runCommand"
            class="flex-1 bg-transparent border-none outline-none text-zinc-100 placeholder-zinc-700 focus:ring-0 p-0"
            placeholder="escreve 'help'..."
            autofocus
            autocomplete="off"
            spellcheck="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const cmd = ref('')
const terminalBody = ref(null)

// Histórico inicial ao abrir
const history = ref([
  'Bem-vindo ao Terminal v1.0.0',
  'Escreve <span class="text-indigo-400 font-bold">help</span> para veres a lista de comandos disponíveis.',
])

// Lógica de Processamento de Comandos
const runCommand = async () => {
  const input = cmd.value.trim().toLowerCase()
  if (!input) return

  // Imprime o comando que o utilizador escreveu
  history.value.push(
    `<span class="text-indigo-500 font-bold">➜</span> <span class="text-amber-500 font-bold">~</span> ${input}`,
  )

  // Processa o comando
  switch (input) {
    case 'help':
      history.value.push(`
        <div class="pl-4 border-l-2 border-zinc-800 my-2 space-y-1 text-zinc-400">
          <div><span class="text-indigo-400 font-bold">whoami</span>  - Descobre quem eu sou</div>
          <div><span class="text-indigo-400 font-bold">skills</span>  - Lista as minhas armas técnicas</div>
          <div><span class="text-indigo-400 font-bold">clear</span>   - Limpa o terminal</div>
          <div><span class="text-indigo-400 font-bold">sudo</span>    - Tenta a tua sorte</div>
        </div>
      `)
      break
    case 'whoami':
      history.value.push(
        'António Figueiras. Engenheiro Informático e Full-Stack Developer. Movido a café e a resolver problemas complexos.',
      )
      break
    case 'skills':
      history.value.push('Vue.js, React.js, Java, PHP, Docker, MySQL, PostgreSQL, Tailwind CSS.')
      break
    case 'clear':
      history.value = []
      break
    case 'sudo':
      history.value.push(
        '<span class="text-red-400">nice try. este incidente será reportado. 🔒</span>',
      )
      break
    case 'cognipharma': // Easter Egg Exclusivo!
      history.value.push(
        '<span class="text-teal-400 font-bold">A processar candidatura...<br/>Analisando código... ✔️<br/>Perfil validado! Candidato pronto para a entrevista. 🚀</span>',
      )
      break
    default:
      history.value.push(`comando não encontrado: ${input}`)
  }

  // Limpa o input e faz scroll automático para o fundo
  cmd.value = ''
  await nextTick()
  if (terminalBody.value) {
    terminalBody.value.scrollTop = terminalBody.value.scrollHeight
  }
}

// Permite abrir/fechar o terminal com Ctrl + ` (backtick)
const handleKeydown = (e) => {
  if (e.ctrlKey && (e.key === '`' || e.key === '´')) {
    isOpen.value = !isOpen.value
  }
}

onMounted(() => window.addEventListener('keydown', handleKeydown))
onUnmounted(() => window.removeEventListener('keydown', handleKeydown))
</script>
