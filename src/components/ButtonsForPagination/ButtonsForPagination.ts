import { Button } from 'components/Button'
import { createElementWithClassName } from 'helpers'
import { workWithPaginationGarage, workWithPaginationWinners } from 'helpers/instanses'

export const ButtonsForPagination = (
  method: typeof workWithPaginationGarage | typeof workWithPaginationWinners,
  numberOfItems: number,
) => {
  const container = createElementWithClassName({ tagName: 'div' })

  const prevButton = Button({
    children: 'Prev',
    async onclick() {
      await method.prevPage()
    },
  })

  if (method.getPageNumber() === 1) prevButton.disabled = true

  const nextButton = Button({
    children: 'Next',
    async onclick() {
      await method.nextPage()
    },
  })

  if (method.getPageNumber() * numberOfItems >= method.getCount()) nextButton.disabled = true

  container.append(prevButton, nextButton)

  return container
}
