import { WinnersList } from 'components/WinnersList/WinnersList'
import { createElementWithClassName } from 'helpers'

export const MainContent = async () => {
  const main = createElementWithClassName({ tagName: 'main' })

  main.append(await WinnersList())

  return main
}
