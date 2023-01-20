import { CarCreationMenu } from 'components/CarCreationMenu'
import { CarList } from 'components/CarList'
import { Text } from 'components/Text'
import { workDataInstance, workWithPagination } from 'helpers/instanses'

import { ActionButtons } from './ActionButtons'

export const MainContent = async () => {
  const fragment = document.createDocumentFragment()

  const { count } = await workDataInstance.getCars(1)

  workWithPagination.setCount(+count!)

  fragment.append(
    CarCreationMenu(/* id as number */),
    Text({ tagName: 'h2', text: `Garage (${count as string})` }),
    Text({ tagName: 'h3', text: `Page #${workWithPagination.getNumberPage()}` }),
    ActionButtons(),
    await CarList(),
  )

  return fragment
}
