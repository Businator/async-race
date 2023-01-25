import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { createElementWithClassName } from 'helpers'
import { workDataInstance } from 'helpers/instanses'
import { Garage } from 'pages/Garage'
import { renderPage } from 'utils/renderPage'
export const CreationForm = () => {
  const form = createElementWithClassName({ tagName: 'form' })

  const inputName = Input({ type: 'text' })
  const inputColor = Input({ type: 'color' })
  const butonSubmit = Button({
    type: 'submit',
    children: 'Create',
  })

  form.append(inputName, inputColor, butonSubmit)

  form.addEventListener('submit', async (event) => {
    event.preventDefault()
    const car = { name: inputName.value, color: inputColor.value }
    workDataInstance.createCar(car)
    renderPage(await Garage())
  })

  return form
}
