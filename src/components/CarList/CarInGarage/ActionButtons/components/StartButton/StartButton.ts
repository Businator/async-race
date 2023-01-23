import { Button } from 'components/Button'

import { workWithDriving } from 'helpers/instanses'

export const StartButton = (id: number) => {
  const button = Button({
    children: 'Start',
    onclick() {
      workWithDriving.startDriving(id)
    },
  })
  button.setAttribute('btn-start', id.toString())
  return button
}
