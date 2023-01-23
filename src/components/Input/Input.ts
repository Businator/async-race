import { createElementWithClassName } from 'helpers'

import { InputProps } from './types'

export const Input = ({ type = 'text', placeholder = '', classname, maxLength }: InputProps) => {
  const input = createElementWithClassName({ tagName: 'input', classname })

  input.type = type
  input.placeholder = placeholder

  if (maxLength) {
    input.maxLength = maxLength
  }

  return input
}
