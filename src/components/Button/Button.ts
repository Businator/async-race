import { createElementWithClassName } from 'helpers'

import { ButtonProps } from './types'

export const Button = ({ children, classname, onclick }: ButtonProps) => {
  const button = createElementWithClassName({ tagName: 'button', classname })

  children && button.append(children)

  const handleClick = (event: MouseEvent) => {
    event.preventDefault()

    onclick?.()
  }

  button.addEventListener('click', handleClick)

  return button
}
