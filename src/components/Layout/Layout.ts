import { Body } from 'components/Body'
import { PageButtons } from 'components/PageButtons'
import { createElementWithClassName } from 'helpers'
export const Layout = (children: DocumentFragment) => {
  const header = createElementWithClassName({ tagName: 'header' })

  header.append(PageButtons())

  const footer = createElementWithClassName({ tagName: 'footer' })

  Body.replaceChildren(header, children, footer)
}
