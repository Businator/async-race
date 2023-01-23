import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { TYPE_SORT } from 'enums'
import { createElementWithClassName } from 'helpers'
import { workWithSort } from 'helpers/instanses'
import { Winners } from 'pages/Winners'
import { renderPage } from 'utils/renderPage'

export const ButtonsWins = () => {
  const buttonsTime = createElementWithClassName({ tagName: 'div' })
  buttonsTime.append(
    Text({ tagName: 'span', text: 'sort by: Wins ' }),
    Button({
      children: TYPE_SORT.ASC,
      async onclick() {
        await workWithSort.sortWins(TYPE_SORT.ASC)
        renderPage(await Winners())
      },
    }),
    Button({
      children: TYPE_SORT.DESC,
      async onclick() {
        await workWithSort.sortWins(TYPE_SORT.DESC)
        renderPage(await Winners())
      },
    }),
  )

  return buttonsTime
}
