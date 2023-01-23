import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { createElementWithClassName } from 'helpers'
import { workDataInstance, workWithSelectCar } from 'helpers/instanses'
import { Garage } from 'pages/Garage'
import { renderPage } from 'utils/renderPage'
export const UpdateForm = () => {
  const form = createElementWithClassName({ tagName: 'form' })

  const inputName = Input({ type: 'text' })
  const inputColor = Input({ type: 'color' })
  const butonSubmit = Button({
    type: 'submit',
    children: 'Update',
  })

  form.append(inputName, inputColor, butonSubmit)

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const car = { name: inputName.value, color: inputColor.value }
    const id = workWithSelectCar.getId()
    if (typeof id === 'number') {
      workDataInstance.updateCar(id, car)
      renderPage(await Garage())
    }
  })

  return form
}
