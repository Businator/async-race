import { Button } from 'components/Button'
import { createElementWithClassName } from 'helpers'

import { workDataInstance, workWithdriving } from 'helpers/instanses'

import { generateRandomCars } from 'utils/generateRandomCars'

import { renderPage } from 'utils/renderPage'

import styles from './styles.css'

export const ActionButtons = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(
    Button({
      children: 'Race',
      classname: styles.btn,
      onclick() {
        workWithdriving.raceAllcar()
      },
    }),
    Button({
      children: 'Reset',
      classname: styles.btn,
      onclick() {
        workWithdriving.resetAllcar()
      },
    }),
    Button({
      children: 'Generate Cars',
      classname: styles.btn,
      onclick() {
        const arrayRandomCars = generateRandomCars()
        arrayRandomCars.forEach((car) => workDataInstance.createCar(car))
        renderPage()
      },
    }),
  )

  return container
}
