import type { FooterTopLinkSection } from '~/types/FooterTopLinks'

const footerTopLinkSections: FooterTopLinkSection[] = [
  {
    id: 'informacoes',
    title: 'Informações',
    items: [
      { id: 'promocoes', label: 'Promoções', ariaLabel: 'Promoções' },
      {
        id: 'termos-e-condicoes',
        label: 'Termos e Condições',
        ariaLabel: 'Termos e Condições'
      },
      {
        id: 'central-de-ajuda',
        label: 'Central de Ajuda',
        ariaLabel: 'Central de Ajuda'
      },
      {
        id: 'nosso-telegram',
        label: 'Nosso Telegram',
        ariaLabel: 'Nosso Telegram'
      }
    ]
  },
  {
    id: 'produtos',
    title: 'Produtos',
    items: [
      { id: 'esportes', label: 'Esportes', ariaLabel: 'Esportes' },
      {
        id: 'apostas-ao-vivo',
        label: 'Apostas ao Vivo',
        ariaLabel: 'Apostas ao Vivo'
      },
      { id: 'cassino', label: 'Cassino', ariaLabel: 'Cassino' },
      {
        id: 'cassino-ao-vivo',
        label: 'Cassino ao Vivo',
        ariaLabel: 'Cassino ao Vivo'
      },
      { id: 'torneios', label: 'Torneios', ariaLabel: 'Torneios' }
    ]
  },
  {
    id: 'sobre',
    title: 'Sobre',
    items: [
      { id: 'nos', label: 'Sobre Nós', ariaLabel: 'Sobre Nós' },
      {
        id: 'jogo-responsavel',
        label: 'Jogo Responsável',
        ariaLabel: 'Jogo Responsável'
      },
      {
        id: 'regras-do-jogo',
        label: 'Regras do Jogo',
        ariaLabel: 'Regras do Jogo'
      },
      { id: 'blog', label: 'Blog', ariaLabel: 'Blog' },
      {
        id: 'politica-de-privacidade',
        label: 'Política de Privacidade',
        ariaLabel: 'Política de Privacidade'
      },
      {
        id: 'politica-pld-ftp',
        label: 'Política PLD-FTP',
        ariaLabel: 'Política PLD-FTP'
      },
      {
        id: 'politica-de-cookies',
        label: 'Política de Cookies',
        ariaLabel: 'Política de Cookies'
      },
      {
        id: 'autoexclusao-centralizada',
        label: 'Autoexclusão Centralizada',
        ariaLabel: 'Autoexclusão Centralizada'
      }
    ]
  }
]

export function useFooterTopLinksService() {
  return { sections: footerTopLinkSections }
}
