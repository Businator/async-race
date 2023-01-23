import { WinnersList } from 'components/WinnersList/WinnersList'
import { createElementWithClassName } from 'helpers'
import { workDataInstance, workWithPaginationWinners } from 'helpers/instanses'

export const MainContent = async () => {
  const main = createElementWithClassName({ tagName: 'main' })

  const { totalCount } = await workDataInstance.getWinners(1)

  workWithPaginationWinners.setCount(Number(totalCount))

  main.append(await WinnersList())

  return main
}
