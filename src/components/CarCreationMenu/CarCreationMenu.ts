import { createElementWithClassName } from 'helpers'

import { CreationForm } from './components/CreationForm'
import { UpdateForm } from './components/UpdateForm'
import styles from './styles.css'
import { ActionButtons } from './components/ActionButtons'

export const CarCreationMenu = (id: number, body: string) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(CreationForm(body), UpdateForm(id, body), ActionButtons(id))

  return container
}
