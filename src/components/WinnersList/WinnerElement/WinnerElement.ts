import { CarImg } from 'components/Road/components/CarImg'
import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'

import styles from './styles.css'

export const WinnerElement = (
  number: number,
  color: string,
  name: string,
  id: number,
  winsCount: number,
  time: number,
) => {
  const element = createElementWithClassName({ tagName: 'li', classname: styles.element })

  element.append(
    Text({ tagName: 'span', text: number.toString() }),
    CarImg(color, id),
    Text({ tagName: 'span', text: name }),
    Text({ tagName: 'span', text: winsCount.toString() }),
    Text({ tagName: 'span', text: time.toString() }),
  )

  return element
}
