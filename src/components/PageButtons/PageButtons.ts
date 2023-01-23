import { Button } from 'components/Button'
import { Layout } from 'components/Layout'
import { createElementWithClassName } from 'helpers'
import { Garage } from 'pages/Garage'
import { Winners } from 'pages/Winners'

export const PageButtons = () => {
  const fragment = document.createDocumentFragment()
  const header = createElementWithClassName({ tagName: 'header' })

  const buttonToGarage = Button({
    children: 'To Garage',
    async onclick() {
      Layout(await Garage())
    },
  })
  const buttonToWinners = Button({
    children: 'To Winners',
    async onclick() {
      Layout(await Winners())
    },
  })

  header.append(buttonToGarage, buttonToWinners)

  fragment.append(header)

  return fragment
}
