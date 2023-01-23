import { createElementWithClassName } from 'helpers'

import { CarImg } from './components/CarImg'
import { Flag } from './components/Flag'

import styles from './styles.css'

export const Road = (color: string, id: number) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(CarImg(color, id), Flag())

  return container
}
