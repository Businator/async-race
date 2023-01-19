import { Button } from 'components/Button'

import { workDataInstance } from 'helpers/instanses'

import styles from './styles.css'

export const StopButton = (id: number) => {
  const button = Button({
    children: 'Stop',
    classname: styles.btn,
    onclick() {
      workDataInstance.stopEngine(id)
    },
  })
  return button
}
