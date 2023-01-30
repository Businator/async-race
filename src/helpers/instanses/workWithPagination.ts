import { Garage } from 'pages/Garage'
import { Winners } from 'pages/Winners'
import { renderPage } from 'utils/renderPage'

import { workDataInstance } from './workDataInstance'
import { workWithSort } from './workWithSort'

abstract class Pagination {
  abstract stepPage: number
  abstract pageNumber: number
  abstract count: number

  abstract nextPage(): void

  abstract prevPage(): void

  abstract getPageNumber(): number

  abstract setCount(count: number): void

  abstract getCount(): number
}

class PaginationGarage extends Pagination {
  stepPage: number
  pageNumber: number
  count: number

  constructor(stepPage = 1, pageNumber = 1, count = 1) {
    super()
    this.stepPage = stepPage
    this.pageNumber = pageNumber
    this.count = count
  }

  async nextPage(): Promise<void> {
    this.stepPage++
    this.pageNumber = this.stepPage
    renderPage(await Garage())
  }

  async prevPage(): Promise<void> {
    if (this.pageNumber > 1) {
      this.stepPage--
      this.pageNumber = this.stepPage
      renderPage(await Garage())
    }
  }

  getPageNumber(): number {
    return this.pageNumber
  }

  setCount(count: number): void {
    this.count = count
  }

  getCount(): number {
    return this.count
  }
}

class PaginationWinners extends Pagination {
  stepPage: number
  pageNumber: number
  count: number

  constructor(stepPage = 1, pageNumber = 1, count = 1) {
    super()
    this.stepPage = stepPage
    this.pageNumber = pageNumber
    this.count = count
  }

  async nextPage(): Promise<void> {
    this.stepPage++
    this.pageNumber = this.stepPage
    const { result } = await workDataInstance.getWinners(workWithPaginationWinners.getPageNumber())
    workWithSort.setSort(result)
    renderPage(await Winners())
  }

  async prevPage(): Promise<void> {
    if (this.pageNumber > 1) {
      this.stepPage--
      this.pageNumber = this.stepPage
      const { result } = await workDataInstance.getWinners(workWithPaginationWinners.getPageNumber())
      workWithSort.setSort(result)
      renderPage(await Winners())
    }
  }

  getPageNumber(): number {
    return this.pageNumber
  }

  setCount(count: number): void {
    this.count = count
  }

  getCount(): number {
    return this.count
  }
}

export const workWithPaginationGarage = new PaginationGarage()
export const workWithPaginationWinners = new PaginationWinners()
