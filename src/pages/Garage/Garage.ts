import { createElementWithClassName } from 'helpers'

import { MainContent } from './MainContent'

export const Garage = async () => {
  const fragment = document.createDocumentFragment()

  const header = createElementWithClassName({ tagName: 'header' })
  header.append()

  fragment.append(await MainContent())

  return fragment
}
