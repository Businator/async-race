import { Button } from 'components/Button'

import { workDataInstance } from 'helpers/instanses'

import styles from './styles.css'

export const StartButton = (id: number) => {
  const button = Button({
    children: 'Start',
    classname: styles.btn,
    onclick() {
      workDataInstance.startEngine(id)
    },
  })
  return button
}
