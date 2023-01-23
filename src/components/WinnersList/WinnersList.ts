import { ButtonsForPagination } from 'components/ButtonsForPagination'
import { Text } from 'components/Text'
import { CODES } from 'enums'
import { ONE, createElementWithClassName } from 'helpers'
import { workDataInstance, workWithPaginationWinners, workWithSort } from 'helpers/instanses'

import { Car } from 'types'

import { ActionButtons } from './ActionButtons'
import { WinnerElement } from './WinnerElement'

export const WinnersList = async () => {
  const list = createElementWithClassName({ tagName: 'ul' })

  const { totalCount } = await workDataInstance.getWinners(workWithPaginationWinners.getNumberPage())

  list.append(
    Text({ tagName: 'h1', text: `Winners (${totalCount})` }),
    Text({ tagName: 'h2', text: `Page #${workWithPaginationWinners.getNumberPage()}` }),
    ButtonsForPagination(workWithPaginationWinners, 10),
    ActionButtons(),
  )

  workWithSort.getSort().forEach(async (winner, index) => {
    const { result, status } = await workDataInstance.getCar(winner.id)
    if (status === CODES.NOT_FOUND) {
      await workDataInstance.deleteWinner(winner.id)
    } else {
      const { name, color } = result as unknown as Car
      list.append(WinnerElement(index + ONE, color, name, winner.id, winner.wins, winner.time))
    }
  })

  return list
}
