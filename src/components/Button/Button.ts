import { createElementWithClassName } from 'helpers'

import { ButtonProps } from './types'

export const Button = ({ children, classname, onclick, type }: ButtonProps) => {
  const button = createElementWithClassName({ tagName: 'button', classname })

  if (typeof children === 'string') {
    button.textContent = children
  }

  if (onclick) {
    const handleClick = (event: MouseEvent) => {
      event.preventDefault()

      onclick()
    }

    button.addEventListener('click', handleClick)
  }

  if (typeof type === 'string') {
    button.type = type
  }

  return button
}
