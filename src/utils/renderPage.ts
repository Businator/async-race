import { Layout } from 'components/Layout'
import { Garage } from 'pages/Garage'

export const renderPage = async () => {
  Layout(await Garage())
}
