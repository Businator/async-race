import { Garage } from 'pages/Garage'
import { renderPage } from 'utils/renderPage'

const render = async () => {
  renderPage(await Garage())
}

render()
