import { MainContent } from './MainContent'

export const Garage = async () => {
  const fragment = document.createDocumentFragment()

  fragment.append(await MainContent())

  return fragment
}
