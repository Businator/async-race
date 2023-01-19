import { CarCreationMenu } from 'components/CarCreationMenu'
import { CarInGarage } from 'components/CarInGarage'
import { createElementWithClassName } from 'helpers'

import { workDataInstance } from 'helpers/instanses'

import styles from './styles.css'

export const Garage = async () => {
  const fragment = document.createDocumentFragment()

  const main = createElementWithClassName({ tagName: 'main' })

  const { items, count } = await workDataInstance.getCars(1)

  const { name, color, id } = items[0]

  main.append(CarCreationMenu(/* id */))

  items.forEach((car) => main.append(CarInGarage(car)))

  fragment.append(main)

  return fragment
}
