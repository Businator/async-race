import { createElementWithClassName } from 'helpers'

import { ActionButtons } from './components/ActionButtons'
import { CreationForm } from './components/CreationForm'
import { UpdateForm } from './components/UpdateForm'

export const CarCreationMenu = () => {
  const container = createElementWithClassName({ tagName: 'div' })

  container.append(CreationForm(), UpdateForm(), ActionButtons())

  return container
}
