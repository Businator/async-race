import { createElementWithClassName } from 'helpers/createElementWithClassName'

import { StartButton } from './components/StartButton'
import { StopButton } from './components/StopButton'
import styles from './styles.css'

export const ActionButtons = (id: number) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(StartButton(id), StopButton(id))

  return container
}
