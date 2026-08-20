export interface FooterTopLinkItem {
  id: string
  label: string
  ariaLabel: string
}

export interface FooterTopLinkSection {
  id: string
  title: string
  items: FooterTopLinkItem[]
}
