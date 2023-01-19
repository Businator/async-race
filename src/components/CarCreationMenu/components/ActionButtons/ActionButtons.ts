import { createElementWithClassName } from 'helpers'

import styles from './styles.css'
import { Button } from 'components/Button'
import { workDataInstance } from 'helpers/instanses'

export const ActionButtons = (id: number) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(
    Button({
      children: 'Race',
      classname: styles.btn,
      onclick() {
        workDataInstance.startEngine(id)
      },
    }),
    Button({
      children: 'Reset',
      classname: styles.btn,
      onclick() {
        workDataInstance.stopEngine(id)
      },
    }),
    Button({
      children: 'Generate Cars',
      classname: styles.btn,
      onclick() {},
    }),
  )

  return container
}
