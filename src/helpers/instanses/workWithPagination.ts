import { Garage } from 'pages/Garage'
import { Winners } from 'pages/Winners'
import { renderPage } from 'utils/renderPage'

abstract class Pagination {
  abstract stepPage: number
  abstract numberPage: number
  abstract count: number

  // constructor(stepPage = 1, numberPage = 1, count = 1) {
  //   this.stepPage = stepPage
  //   this.numberPage = numberPage
  //   this.count = count
  // }

  /* async */ abstract nextPage(): void /* {
    this.stepPage++
    this.numberPage = this.stepPage
    renderPage(await Garage())
  } */

  /* async */ abstract prevPage(): void /* {
    if (this.numberPage > 1) {
      this.stepPage--
      this.numberPage = this.stepPage
      renderPage(await Garage())
    }
  } */

  abstract getNumberPage(): number /* {
    return this.numberPage
  } */

  abstract setCount(count: number): void /* {
    this.count = count
  } */

  abstract getCoutn(): number /* {
    return this.count
  } */
}

class PaginationGarage extends Pagination {
  stepPage: number
  numberPage: number
  count: number

  constructor(stepPage = 1, numberPage = 1, count = 1) {
    super()
    this.stepPage = stepPage
    this.numberPage = numberPage
    this.count = count
  }

  async nextPage(): Promise<void> {
    this.stepPage++
    this.numberPage = this.stepPage
    renderPage(await Garage())
  }

  async prevPage(): Promise<void> {
    if (this.numberPage > 1) {
      this.stepPage--
      this.numberPage = this.stepPage
      renderPage(await Garage())
    }
  }

  getNumberPage(): number {
    return this.numberPage
  }

  setCount(count: number): void {
    this.count = count
  }

  getCoutn(): number {
    return this.count
  }
}

class PaginationWinners extends Pagination {
  stepPage: number
  numberPage: number
  count: number

  constructor(stepPage = 1, numberPage = 1, count = 1) {
    super()
    this.stepPage = stepPage
    this.numberPage = numberPage
    this.count = count
  }

  async nextPage(): Promise<void> {
    this.stepPage++
    this.numberPage = this.stepPage
    renderPage(await Winners())
  }

  async prevPage(): Promise<void> {
    if (this.numberPage > 1) {
      this.stepPage--
      this.numberPage = this.stepPage
      renderPage(await Winners())
    }
  }

  getNumberPage(): number {
    return this.numberPage
  }

  setCount(count: number): void {
    this.count = count
  }

  getCoutn(): number {
    return this.count
  }
}

export const workWithPaginationGarage = new PaginationGarage()
export const workWithPaginationWinners = new PaginationWinners()
