import { renderPage } from 'utils/renderPage'

class Pagination {
  stepPage = 1
  numberPage = 1
  count = 1

  nextPage() {
    this.stepPage++
    this.numberPage = this.stepPage
    renderPage()
  }

  prevPage() {
    if (this.numberPage > 1) {
      this.stepPage--
      this.numberPage = this.stepPage
      renderPage()
    }
  }

  getNumberPage() {
    return this.numberPage
  }

  setCount(count: number) {
    this.count = count
  }

  getCoutn() {
    return this.count
  }
}

export const workWithPagination = new Pagination()
