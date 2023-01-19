import { Button } from 'components/Button'
import { createElementWithClassName } from 'helpers'

import { workDataInstance } from 'helpers/instanses'

import styles from './styles.css'

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
