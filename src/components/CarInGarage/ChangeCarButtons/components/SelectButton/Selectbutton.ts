import { Button } from 'components/Button'

import { workDataInstance } from 'helpers/instanses'

import styles from './styles.css'

export const SelectButton = (id: number) => {
  const button = Button({
    children: 'Select',
    classname: styles.btn,
    onclick() {
      workDataInstance.getCar(id)
    },
  })
  return button
}
