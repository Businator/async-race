import { createElementWithClassName } from 'helpers'

import { ImageProps } from './types'

export const Image = ({ src, alt, classname }: ImageProps) => {
  const image = createElementWithClassName({ tagName: 'img', classname })

  image.src = src
  image.alt = alt

  return image
}
