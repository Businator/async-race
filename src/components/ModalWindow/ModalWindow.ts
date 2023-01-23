import { Text } from 'components/Text'
import { createElementWithClassName, roundNumber } from 'helpers'

import styles from './styles.css'

export const ModalWindow = (name: string, time: number) => {
  const back = createElementWithClassName({ tagName: 'div', classname: styles.back })

  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  const congrats = Text({
    tagName: 'h2',
    text: `${name} wont first [${roundNumber(time)}s]!`,
    classname: styles.congrats,
  })

  container.append(congrats)

  back.append(container)

  setTimeout(() => {
    back.remove()
  }, 3000)

  return back
}
