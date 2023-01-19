import { Garage } from 'pages/Garage'

import { Body } from './components/Body/Body'

const garage = async () => {
  const res = await Garage()
  return Body.append(res)
}

garage()
  .then((res) => res)
  .then((res) => res)
