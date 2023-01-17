import { PropsWithChildren } from 'types'

export type TextProps = PropsWithChildren<{
  tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  classname?: string
  text?: string
}>
