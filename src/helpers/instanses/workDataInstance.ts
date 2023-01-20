import { Car, Cars } from 'types'

class CarsInstance {
  base = 'http://127.0.0.1:3000'
  garage = `${this.base}/garage`
  winners = `${this.base}/winners`
  engine = `${this.base}/engine`

  getCars = async (page: number, limit = 7): Promise<Cars> => {
    try {
      const response = await fetch(`${this.garage}?_page=${page}&_limit=${limit}`)

      return {
        items: (await response.json()) as [Car],
        count: response.headers.get('X-Total-Count'),
      }
    } catch {
      throw new Error()
    }
  }

  getCar = async (id: number) => {
    try {
      const response = await fetch(`${this.garage}/${id}`)
      return (await response.json()) as [Car]
    } catch {
      throw new Error()
    }
  }

  createCar = async (car: Car) => {
    try {
      await fetch(this.garage, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch {
      throw new Error()
    }
  }

  deleteCar = async (id: number) => {
    try {
      await fetch(`${this.garage}/${id}`, { method: 'DELETE' })
    } catch {
      throw new Error()
    }
  }

  updateCar = async (id: number, car: Car) => {
    try {
      await fetch(`${this.garage}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } catch {
      throw new Error()
    }
  }
}

class EngineMethods extends CarsInstance {
  startEngine = async (id: number) => {
    try {
      const response = await fetch(`${this.engine}?id=${id}&status=started`)
      return {
        status: response.status,
        result: response.json(),
      }
    } catch {
      throw new Error()
    }
  }

  stopEngine = async (id: number) => {
    try {
      const response = await fetch(`${this.engine}?id=${id}&status=stoped`)
      return {
        status: response.status,
        result: response.json(),
      }
    } catch {
      throw new Error()
    }
  }

  drive = async (id: number) => {
    const res = await fetch(`${this.engine}?id=${id}&status=stoped`)
    return res.status !== 200 ? { success: false } : { ...((await res.json()) as Error) }
  }
}

export const workDataInstance = new EngineMethods()
