import { CarImg } from 'components/CarImg'
import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers/createElementWithClassName'

import { ActionButtons } from './ActionButtons'
import { ChangeCarButtons } from './ChangeCarButtons'
import styles from './styles.css'

export const ElementOfGarage = (color: string, carName: string) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const flag = createElementWithClassName({ tagName: 'img' })
  flag.src = 'assets/flag.png'

  container.insertAdjacentHTML('afterbegin', CarImg(color))

  container.append(
    ChangeCarButtons(),
    ActionButtons(),
    Text({ tagName: 'span', text: carName, classname: styles.carName }),
  )

  return container
}
