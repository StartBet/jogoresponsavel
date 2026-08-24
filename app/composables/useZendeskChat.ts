import { readonly, ref, type Ref } from 'vue'

declare global {
  interface Window {
    zE?: (...args: unknown[]) => void
  }
}

const ZENDESK_SNIPPET_ID = 'ze-snippet'
const ZENDESK_SNIPPET_URL =
  'https://static.zdassets.com/ekr/snippet.js?key=05f7e9c0-797b-4df7-9b07-5d976d554662'

/** Estado compartilhado: o snippet é único por página, independente de quantos componentes usem a composable. */
const isLoading = ref(false)

let loadPromise: Promise<void> | null = null
let isCloseHandlerRegistered = false

const hideMessenger = () => {
  window.zE?.('messenger', 'hide')
}

/**
 * O messenger do Zendesk continua ocupando a tela depois de fechado, então o
 * fechamento também precisa escondê-lo. O listener é registrado uma única vez.
 */
const registerCloseHandler = () => {
  if (!window.zE || isCloseHandlerRegistered) return

  window.zE('messenger:on', 'close', hideMessenger)
  isCloseHandlerRegistered = true
}

const showAndOpenMessenger = () => {
  registerCloseHandler()
  window.zE?.('messenger', 'show')
  window.zE?.('messenger', 'open')
}

const loadSnippet = (): Promise<void> => {
  if (loadPromise) return loadPromise

  loadPromise = new Promise<void>((resolve, reject) => {
    if (window.zE) {
      resolve()
      return
    }

    const existingSnippet = document.getElementById(ZENDESK_SNIPPET_ID)
    const snippet =
      (existingSnippet as HTMLScriptElement | null) ?? document.createElement('script')

    snippet.addEventListener('load', () => resolve(), { once: true })
    snippet.addEventListener('error', () => reject(new Error('Falha ao carregar o Zendesk')), {
      once: true
    })

    if (!existingSnippet) {
      snippet.id = ZENDESK_SNIPPET_ID
      snippet.src = ZENDESK_SNIPPET_URL
      snippet.async = true
      document.head.appendChild(snippet)
    }
  })

  // Libera uma nova tentativa caso o carregamento falhe.
  loadPromise.catch(() => {
    loadPromise = null
  })

  return loadPromise
}

export interface UseZendeskChatReturn {
  /** `true` enquanto o snippet está sendo baixado. */
  isLoading: Readonly<Ref<boolean>>
  /** Carrega o snippet sob demanda e abre o messenger. */
  open: () => Promise<void>
  /** Esconde o messenger sem descarregar o snippet. */
  hide: () => void
}

/**
 * Integração com o chat de atendimento da StartBet (Zendesk).
 *
 * O snippet só é baixado no primeiro clique — nada é carregado no boot da
 * página. Chamadas seguintes reaproveitam o script já presente.
 *
 * ```vue
 * <script setup lang="ts">
 * import { useZendeskChat } from '~/composables/useZendeskChat'
 *
 * const { isLoading, open } = useZendeskChat()
 * </script>
 *
 * <template>
 *   <StButton :disabled="isLoading" @click="open">Abrir chat</StButton>
 * </template>
 * ```
 */
export const useZendeskChat = (): UseZendeskChatReturn => {
  const open = async () => {
    if (typeof window === 'undefined' || isLoading.value) return

    if (window.zE) {
      showAndOpenMessenger()
      return
    }

    isLoading.value = true

    try {
      await loadSnippet()
      showAndOpenMessenger()
    } catch {
      // Sem o snippet não há chat: o botão volta ao estado normal.
    } finally {
      isLoading.value = false
    }
  }

  const hide = () => {
    if (typeof window === 'undefined') return

    hideMessenger()
  }

  return {
    isLoading: readonly(isLoading),
    open,
    hide
  }
}
