import { createElementWithClassName } from 'helpers'

import { TextProps } from './types'

export const Text = ({ tagName, text, classname, children = document.createElement('span') }: TextProps) => {
  const textElement = createElementWithClassName({ tagName, classname })

  text ? (textElement.innerText = text) : textElement.append(children)

  return textElement
}
