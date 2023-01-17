export const removeClassnameToElement = ({ element, classname }: { element: HTMLElement; classname?: string }) => {
  classname && element.classList.remove(classname)
}
