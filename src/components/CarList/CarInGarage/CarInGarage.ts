import { Road } from 'components/Road'
import { createElementWithClassName } from 'helpers/createElementWithClassName'

import { Car } from 'types'

import { ActionButtons } from './ActionButtons'
import { ChangeCarButtons } from './ChangeCarButtons'
import styles from './styles.css'

export const CarInGarage = ({ color, name, id }: Car) => {
  const container = createElementWithClassName({ tagName: 'li', classname: styles.container })

  container.append(ChangeCarButtons(id as number, name), Road(color, id as number), ActionButtons(id as number))

  return container
}
