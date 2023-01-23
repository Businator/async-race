import { Garage } from 'pages/Garage'
import { renderPage } from 'utils/renderPage'

class Pagination {
  stepPage = 1
  numberPage = 1
  count = 1

  async nextPage() {
    this.stepPage++
    this.numberPage = this.stepPage
    renderPage(await Garage())
  }

  async prevPage() {
    if (this.numberPage > 1) {
      this.stepPage--
      this.numberPage = this.stepPage
      renderPage(await Garage())
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
