export const containsClassnameToElement = ({
  element,
  classname,
}: {
  element: HTMLElement
  classname?: string
}): boolean => {
  return !!classname && element.classList.contains(classname)
}
