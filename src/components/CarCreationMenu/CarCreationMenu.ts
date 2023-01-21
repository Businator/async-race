import { createElementWithClassName } from 'helpers'

import { ActionButtons } from './components/ActionButtons'
import { CreationForm } from './components/CreationForm'
import { UpdateForm } from './components/UpdateForm'
import styles from './styles.css'

export const CarCreationMenu = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(CreationForm(), UpdateForm(), ActionButtons())

  return container
}
