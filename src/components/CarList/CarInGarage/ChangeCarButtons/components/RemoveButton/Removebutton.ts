import { Button } from 'components/Button'

import { workDataInstance } from 'helpers/instanses'

import styles from './styles.css'

export const RemoveButton = (id: number) => {
  const button = Button({
    children: 'Delete',
    classname: styles.btn,
    onclick() {
      workDataInstance.deleteCar(id)
    },
  })
  return button
}
