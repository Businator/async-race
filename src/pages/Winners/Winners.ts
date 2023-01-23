import { Text } from 'components/Text'
import { workDataInstance } from 'helpers/instanses'

export const Winners = async () => {
  const fragment = document.createDocumentFragment()

  fragment.append(Text({ tagName: 'h1', text: `Winners` }))

  console.log(await workDataInstance.getWinners(1))

  return fragment
}
