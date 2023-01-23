import { Garage } from 'pages/Garage'
import { Winners } from 'pages/Winners'
import { renderPage } from 'utils/renderPage'

const render = async () => {
  renderPage(await Garage())
}

render()
