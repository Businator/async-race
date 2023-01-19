import { Car, Cars } from 'types'

class CarsInstance {
  base = 'http://127.0.0.1:3000'
  garage = `${this.base}/garage`
  winners = `${this.base}/winners`
  engine = `${this.base}/engine`

  getCars = async (page: number, limit = 7): Promise<Cars> => {
    const response = await fetch(`${this.garage}?_page=${page}&_limit=${limit}`)

    return {
      items: (await response.json()) as [Car],
      count: response.headers.get('X-Total-Count'),
    }
  }

  getCar = async (id: number) => await fetch(`${this.garage}/${id}`)

  createCar = async (body: string) =>
    await fetch(this.garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'aplication/json',
      },
    })

  deleteCar = async (id: number) => await fetch(`${this.garage}/${id}`, { method: 'DELETE' })

  updateCar = async (id: number, body: string) =>
    await fetch(`${this.garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'aplication/json',
      },
    })
}

class EngineMethods extends CarsInstance {
  startEngine = async (id: number) => await fetch(`${this.engine}?id=${id}&status=started`)

  stopEngine = async (id: number) => await fetch(`${this.engine}?id=${id}&status=stoped`)
}

export const workDataInstance = new EngineMethods()
