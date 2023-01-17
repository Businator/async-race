import { createElementWithClassName } from 'helpers/createElementWithClassName'

import { RemoveButton } from './components/RemoveButton'
import { SelectButton } from './components/SelectButton'
import styles from './styles.css'

export const ChangeCarButtons = () => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(RemoveButton(), SelectButton())

  return container
}
