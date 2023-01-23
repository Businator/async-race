import { createElementWithClassName } from 'helpers'
import { workDataInstance, workWithPaginationGarage } from 'helpers/instanses'

import { CarInGarage } from './CarInGarage'

export const CarList = async () => {
  const list = createElementWithClassName({ tagName: 'ul' })

  const { items } = await workDataInstance.getCars(workWithPaginationGarage.getNumberPage())

  items.forEach((car) => list.append(CarInGarage(car)))

  return list
}
