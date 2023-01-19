import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { createElementWithClassName } from 'helpers'
import { workDataInstance } from 'helpers/instanses'
export const CreationForm = (body: string) => {
  const form = createElementWithClassName({ tagName: 'form' })
  form.append(
    Input({ type: 'text' }),
    Input({ type: 'color' }),
    Button({
      children: 'Create',
      onclick() {
        workDataInstance.createCar(body)
      },
    }),
  )
  return form
}
