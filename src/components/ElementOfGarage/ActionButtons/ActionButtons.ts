import { createElementWithClassName } from 'helpers/createElementWithClassName'

import { StartButton } from './components/StartButton'
import { StopButton } from './components/StopButton'
import styles from './styles.css'

export const ActionButtons = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(StartButton(), StopButton())

  return container
}
