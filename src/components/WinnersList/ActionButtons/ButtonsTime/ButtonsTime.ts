import { Button } from 'components/Button'
import { Text } from 'components/Text'
import { createElementWithClassName } from 'helpers'
import { workWithSort } from 'helpers/instanses'
import { Winners } from 'pages/Winners'
import { renderPage } from 'utils/renderPage'

export const ButtonsTime = () => {
  const buttonsTime = createElementWithClassName({ tagName: 'div' })
  buttonsTime.append(
    Text({ tagName: 'span', text: 'sort by: Time ' }),
    Button({
      children: 'ASC',
      async onclick() {
        await workWithSort.sortTime('ASC')
        renderPage(await Winners())
      },
    }),
    Button({
      children: 'DESC',
      async onclick() {
        await workWithSort.sortTime('DESC')
        renderPage(await Winners())
      },
    }),
  )

  return buttonsTime
}
