import { Button } from 'components/Button'
import { createElementWithClassName } from 'helpers'

import { workDataInstance, workWithDriving } from 'helpers/instanses'

import { Garage } from 'pages/Garage'
import { generateRandomCars } from 'utils/generateRandomCars'

import { renderPage } from 'utils/renderPage'

export const ActionButtons = () => {
  const container = createElementWithClassName({ tagName: 'div' })

  const buttomRace = Button({
    children: 'Race',

    onclick() {
      workWithDriving.raceAllcar()
      buttomRace.disabled = true
    },
  })

  const buttomReset = Button({
    children: 'Reset',

    onclick() {
      workWithDriving.resetAllcar()
      buttomRace.disabled = false
    },
  })

  const buttomGenerate = Button({
    children: 'Generate Cars',

    async onclick() {
      const arrayRandomCars = generateRandomCars()
      arrayRandomCars.forEach((car) => workDataInstance.createCar(car))
      renderPage(await Garage())
    },
  })

  container.append(buttomRace, buttomReset, buttomGenerate)

  return container
}
