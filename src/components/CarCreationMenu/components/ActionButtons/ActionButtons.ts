import { Button } from 'components/Button'
import { createElementWithClassName } from 'helpers'

import { workDataInstance, workWithDriving } from 'helpers/instanses'

import { Garage } from 'pages/Garage'
import { generateRandomCars } from 'utils/generateRandomCars'

import { renderPage } from 'utils/renderPage'

import styles from './styles.css'

export const ActionButtons = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const buttomRace = Button({
    children: 'Race',
    classname: styles.btn,
    onclick() {
      workWithDriving.raceAllcar()
      buttomRace.disabled = true
    },
  })

  const buttomReset = Button({
    children: 'Reset',
    classname: styles.btn,
    onclick() {
      workWithDriving.resetAllcar()
      buttomRace.disabled = false
    },
  })

  const buttomGenerate = Button({
    children: 'Generate Cars',
    classname: styles.btn,
    async onclick() {
      const arrayRandomCars = generateRandomCars()
      arrayRandomCars.forEach((car) => workDataInstance.createCar(car))
      renderPage(await Garage())
    },
  })

  container.append(buttomRace, buttomReset, buttomGenerate)

  return container
}
