import { createElementWithClassName } from 'helpers'

export const Flag = () => {
  const flag = createElementWithClassName({ tagName: 'div' })
  flag.innerHTML = '&#128681'

  return flag
}
