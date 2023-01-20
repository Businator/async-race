import { CarCreationMenu } from 'components/CarCreationMenu'
import { CarList } from 'components/CarList'
import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import { workDataInstance, workWithPagination } from 'helpers/instanses'

import { ActionButtons } from './ActionButtons'

export const MainContent = async () => {
  const main = createElementWithClassName({ tagName: 'main' })

  const { count } = await workDataInstance.getCars(1)

  workWithPagination.setCount(+count!)

  main.append(
    CarCreationMenu(/* id as number */),
    Text({ tagName: 'h2', text: `Garage (${count as string})` }),
    Text({ tagName: 'h3', text: `Page #${workWithPagination.getNumberPage()}` }),
    ActionButtons(),
    await CarList(),
  )

  return main
}
