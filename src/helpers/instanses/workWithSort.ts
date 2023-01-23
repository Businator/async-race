import { TYPE_SORT } from 'enums'
import { Winner } from 'types/Winner'

import { workDataInstance } from './workDataInstance'
import { workWithPaginationWinners } from './workWithPagination'

class Sort {
  sortResult: Winner[] = []

  async sortTime(typeSort: TYPE_SORT.ASC | TYPE_SORT.DESC) {
    const { result } = await workDataInstance.getWinners(workWithPaginationWinners.getNumberPage())
    if (typeSort === TYPE_SORT.ASC) {
      result.sort((a, b) => b.time - a.time)
    } else {
      result.sort((a, b) => a.time - b.time)
    }

    this.setSort(result)
  }

  async sortWins(typeSort: TYPE_SORT.ASC | TYPE_SORT.DESC) {
    const { result } = await workDataInstance.getWinners(workWithPaginationWinners.getNumberPage())
    if (typeSort === TYPE_SORT.ASC) {
      result.sort((a, b) => b.wins - a.wins)
    } else {
      result.sort((a, b) => a.wins - b.wins)
    }

    this.setSort(result)
  }

  getSort() {
    return this.sortResult
  }

  setSort(sortWinners: Winner[]) {
    this.sortResult = sortWinners
  }
}

export const workWithSort = new Sort()
