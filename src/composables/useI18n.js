import { ref, computed } from 'vue'

const lang = ref(localStorage.getItem('lang') || 'pt')

export function useI18n() {
  const toggleLang = () => {
    lang.value = lang.value === 'pt' ? 'en' : 'pt'
    localStorage.setItem('lang', lang.value)
  }

  const t = (pt, en) => computed(() => (lang.value === 'pt' ? pt : en))

  return { lang, toggleLang, t }
}
