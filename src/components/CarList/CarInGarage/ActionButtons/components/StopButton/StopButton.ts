import { Button } from 'components/Button'

import { workWithDriving } from 'helpers/instanses'

export const StopButton = (id: number) => {
  const button = Button({
    children: 'Stop',
    onclick() {
      workWithDriving.stopDriving(id)
      button.disabled = false
    },
  })
  button.setAttribute('btn-stop', id.toString())
  button.disabled = true
  return button
}
