import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers/createElementWithClassName'

import { RemoveButton } from './components/RemoveButton'
import { SelectButton } from './components/SelectButton'
import styles from './styles.css'

export const ChangeCarButtons = (id: number, name: string) => {
  const container = createElementWithClassName({ tagName: 'div', classname: styles.container })

  container.append(RemoveButton(id), SelectButton(id), Text({ tagName: 'span', text: name, classname: styles.name }))

  return container
}
