import { workDataInstance } from 'helpers/instanses'

const { items: cars, count: carsCount } = workDataInstance.getCar(1)

export default {
  carsPage: 1,
  cars,
  carsCount,
}
