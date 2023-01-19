import { ElementOfGarage } from 'components/ElementOfGarage'
import { createElementWithClassName } from 'helpers'

import { workDataInstance } from 'helpers/instanses'

import styles from './styles.css'

export const Garage = async () => {
  const container = createElementWithClassName({ tagName: 'ul', classname: styles.container })

  const { items, count } = await workDataInstance.getCars(1)

  items.forEach((car) => container.append(ElementOfGarage(car)))

  return container
}
