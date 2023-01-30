import { ButtonsForPagination } from 'components/ButtonsForPagination'
import { CarCreationMenu } from 'components/CarCreationMenu'
import { CarList } from 'components/CarList'
import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import { workDataInstance, workWithPaginationGarage } from 'helpers/instanses'

export const MainContent = async () => {
  const main = createElementWithClassName({ tagName: 'main' })

  const { count } = await workDataInstance.getCars(1)

  workWithPaginationGarage.setCount(+count!)

  main.append(
    CarCreationMenu(),
    Text({ tagName: 'h2', text: `Garage (${count as string})` }),
    Text({ tagName: 'h3', text: `Page #${workWithPaginationGarage.getPageNumber()}` }),
    ButtonsForPagination(workWithPaginationGarage, 7),
    await CarList(),
  )

  return main
}
