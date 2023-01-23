import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import { workDataInstance, workWithPagination } from 'helpers/instanses'

import { Car } from 'types'

import { WinnerElement } from './WinnerElement'

export const WinnersList = async () => {
  const list = createElementWithClassName({ tagName: 'ul' })

  const { result, totalCount } = await workDataInstance.getWinners(1)

  list.append(
    Text({ tagName: 'h1', text: `Winners (${totalCount})` }),
    Text({ tagName: 'h2', text: `Page #${workWithPagination.getNumberPage()}` }),
  )

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  result.forEach(async (winner, index) => {
    const { result, status } = await workDataInstance.getCar(winner.id)
    if (status === 404) {
      await workDataInstance.deleteWinner(winner.id)
    } else {
      const { name, color } = result as unknown as Car
      list.append(WinnerElement(index + 1, color, name, winner.id, winner.wins, winner.time))
    }
  })

  return list
}
