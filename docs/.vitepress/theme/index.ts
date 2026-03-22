import DefaultTheme from 'vitepress/theme'
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import mermaid from 'mermaid'

export default {
  ...DefaultTheme,
  setup() {
    const route = useRoute()

    const renderMermaid = async () => {
      await nextTick()
      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose'
      })
      const elements = document.querySelectorAll('.mermaid')
      elements.forEach((el) => {
        const element = el as HTMLElement
        const source = element.textContent || ''
        element.removeAttribute('data-processed')
        element.innerHTML = source
      })
      await mermaid.run({
        querySelector: '.mermaid'
      })
    }

    onMounted(() => {
      renderMermaid()
    })

    watch(() => route.path, () => {
      renderMermaid()
    })
  }
}
