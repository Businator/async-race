import { Button } from 'components/Button'

import { workDataInstance, workWithSelectCar } from 'helpers/instanses'

export const SelectButton = (id: number) => {
  const button = Button({
    children: 'Select',
    onclick() {
      workDataInstance.getCar(id)
      workWithSelectCar.setId(id)
    },
  })
  return button
}
