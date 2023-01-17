import { SYMBOL } from 'enums'

export const capitalizeText = (text: string) => {
  return text
    .split(SYMBOL.SPACE)
    .map((word) => {
      const lowerText = word.toLowerCase()

      return word.charAt(0).toUpperCase() + lowerText.slice(1)
    })
    .join(SYMBOL.SPACE)
}
