import { createElementWithClassName } from 'helpers'
import { workDataInstance, workWithPagination } from 'helpers/instanses'

import { CarInGarage } from './CarInGarage'

export const CarList = async () => {
  const list = createElementWithClassName({ tagName: 'ul' })

  const { items } = await workDataInstance.getCars(workWithPagination.getNumberPage())

  items.forEach((car) => list.append(CarInGarage(car)))

  return list
}
