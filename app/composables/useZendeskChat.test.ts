import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const SNIPPET_ID = 'ze-snippet'

/** Cada teste precisa de um módulo novo: o estado do snippet vive no escopo do módulo. */
const importComposable = async () => {
  vi.resetModules()
  const mod = await import('./useZendeskChat')
  return mod.useZendeskChat()
}

/**
 * O happy-dom dispara `error` ao conectar um `<script src>` externo, o que
 * resolveria o carregamento antes do teste simular o `load`. O src é guardado
 * e removido para que os eventos fiquem sob controle do teste.
 */
const stubScriptInjection = () => {
  const injectedSrcs: string[] = []

  vi.spyOn(document.head, 'appendChild').mockImplementation(((node: Node) => {
    const script = node as HTMLScriptElement
    injectedSrcs.push(script.src)
    script.removeAttribute('src')
    return Node.prototype.appendChild.call(document.head, script)
  }) as typeof document.head.appendChild)

  return injectedSrcs
}

const getSnippet = () => document.getElementById(SNIPPET_ID) as HTMLScriptElement

const flush = () => new Promise((resolve) => setTimeout(resolve, 0))

beforeEach(() => {
  getSnippet()?.remove()
  delete window.zE
})

afterEach(() => {
  vi.restoreAllMocks()
})

describe('useZendeskChat', () => {
  it('injeta o snippet apenas no primeiro open e abre o messenger ao carregar', async () => {
    const injectedSrcs = stubScriptInjection()
    const { isLoading, open } = await importComposable()

    expect(getSnippet()).toBeNull()

    const opening = open()
    expect(isLoading.value).toBe(true)

    const snippet = getSnippet()
    expect(snippet).not.toBeNull()
    expect(snippet.async).toBe(true)
    expect(injectedSrcs[0]).toContain('static.zdassets.com/ekr/snippet.js')

    const zE = vi.fn()
    window.zE = zE
    snippet.dispatchEvent(new Event('load'))
    await opening

    expect(isLoading.value).toBe(false)
    expect(zE).toHaveBeenCalledWith('messenger:on', 'close', expect.any(Function))
    expect(zE).toHaveBeenCalledWith('messenger', 'show')
    expect(zE).toHaveBeenCalledWith('messenger', 'open')
  })

  it('reaproveita o snippet já carregado nas aberturas seguintes', async () => {
    const { open } = await importComposable()
    const zE = vi.fn()
    window.zE = zE

    await open()

    expect(getSnippet()).toBeNull()
    expect(zE).toHaveBeenCalledWith('messenger', 'open')

    zE.mockClear()
    await open()

    // O handler de close é registrado uma única vez.
    expect(zE).not.toHaveBeenCalledWith('messenger:on', 'close', expect.any(Function))
    expect(zE).toHaveBeenCalledWith('messenger', 'open')
  })

  it('esconde o messenger quando o usuário fecha o chat', async () => {
    const { open } = await importComposable()
    const zE = vi.fn()
    window.zE = zE

    await open()

    const closeHandler = zE.mock.calls.find(
      ([target, event]) => target === 'messenger:on' && event === 'close'
    )?.[2] as () => void

    zE.mockClear()
    closeHandler()

    expect(zE).toHaveBeenCalledWith('messenger', 'hide')
  })

  it('destrava o botão e permite nova tentativa quando o snippet falha', async () => {
    stubScriptInjection()
    const { isLoading, open } = await importComposable()

    const firstAttempt = open()
    getSnippet().dispatchEvent(new Event('error'))
    await firstAttempt
    await flush()

    expect(isLoading.value).toBe(false)

    getSnippet().remove()

    const secondAttempt = open()
    expect(getSnippet()).not.toBeNull()

    const zE = vi.fn()
    window.zE = zE
    getSnippet().dispatchEvent(new Event('load'))
    await secondAttempt

    expect(zE).toHaveBeenCalledWith('messenger', 'open')
  })
})
