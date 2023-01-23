import { Button } from 'components/Button'

import { workWithDriving } from 'helpers/instanses'

import styles from './styles.css'

export const StopButton = (id: number) => {
  const button = Button({
    children: 'Stop',
    classname: styles.btn,
    onclick() {
      workWithDriving.stopDriving(id)
      button.disabled = false
    },
  })
  button.setAttribute('btn-stop', id.toString())
  button.disabled = true
  return button
}
