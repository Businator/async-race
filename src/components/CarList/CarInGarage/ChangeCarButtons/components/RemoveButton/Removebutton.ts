import { Button } from 'components/Button'

import { workDataInstance } from 'helpers/instanses'

import { Garage } from 'pages/Garage'
import { renderPage } from 'utils/renderPage'

export const RemoveButton = (id: number) => {
  const button = Button({
    children: 'Delete',
    async onclick() {
      await workDataInstance.deleteWinner(id)
      await workDataInstance.deleteCar(id)
      renderPage(await Garage())
    },
  })
  return button
}
