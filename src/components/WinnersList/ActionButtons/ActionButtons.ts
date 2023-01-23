import { createElementWithClassName } from 'helpers'

import { ButtonsTime } from './ButtonsTime'
import { ButtonsWins } from './ButtonsWins'
export const ActionButtons = () => {
  const container = createElementWithClassName({ tagName: 'div' })

  container.append(ButtonsTime(), ButtonsWins())

  return container
}
