import { Body } from 'components/Body'
import { Garage } from 'pages/Garage'

export const renderPage = async () => {
  Body.replaceChildren(await Garage())
}
