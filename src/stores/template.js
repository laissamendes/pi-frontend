import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTemplateStore = defineStore('template', () => {
  const title = ref('Temporário')
  function setTitle(newTitle) {
    title.value = newTitle
  }

  return { title, setTitle }
})
