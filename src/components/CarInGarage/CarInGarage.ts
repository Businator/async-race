import { CarImg } from 'components/CarImg'
import { createElementWithClassName } from 'helpers/createElementWithClassName'

import { Car } from 'types'

import { ActionButtons } from './ActionButtons'
import { ChangeCarButtons } from './ChangeCarButtons'
import styles from './styles.css'

export const CarInGarage = ({ color, name, id }: Car) => {
  const container = createElementWithClassName({ tagName: 'li', classname: styles.container })

  container.append(ChangeCarButtons(id, name), CarImg(color), ActionButtons(id))

  return container
}
