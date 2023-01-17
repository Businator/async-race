import { PropsWithChildren } from 'types'

export type ButtonProps = PropsWithChildren<{
  classname?: string | Array<string | undefined>
  onclick?: () => void
}>
