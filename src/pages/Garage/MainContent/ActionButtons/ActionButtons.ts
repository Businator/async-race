import { Button } from 'components/Button'
import { createElementWithClassName } from 'helpers'
import { workWithPagination } from 'helpers/instanses'

export const ActionButtons = () => {
  const container = createElementWithClassName({ tagName: 'div' })

  const prevButton = Button({
    children: 'Prev',
    async onclick() {
      await workWithPagination.prevPage()
    },
  })

  if (workWithPagination.getNumberPage() === 1) prevButton.disabled = true

  const nextButton = Button({
    children: 'Next',
    async onclick() {
      await workWithPagination.nextPage()
    },
  })

  if (workWithPagination.getNumberPage() * 7 >= workWithPagination.getCoutn()) nextButton.disabled = true

  container.append(prevButton, nextButton)

  return container
}
