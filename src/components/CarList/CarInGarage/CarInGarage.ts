import { Road } from 'components/Road'
import { createElementWithClassName } from 'helpers/createElementWithClassName'

import { Car } from 'types'

import { ActionButtons } from './ActionButtons'
import { ChangeCarButtons } from './ChangeCarButtons'

export const CarInGarage = ({ color, name, id }: Car) => {
  const container = createElementWithClassName({ tagName: 'li' })

  container.append(ChangeCarButtons(id as number, name), Road(color, id as number), ActionButtons(id as number))

  return container
}
