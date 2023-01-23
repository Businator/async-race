import { Car, Cars } from 'types'
import { CarEngine } from 'types/CarEngiine'
import { Winner } from 'types/Winner'
import { renderPage } from 'utils/renderPage'

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
      renderPage()
    } catch {
      throw new Error()
    }
  }

  deleteCar = async (id: number) => {
    try {
      await fetch(`${this.garage}/${id}`, { method: 'DELETE' })
      renderPage()
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
      renderPage()
    } catch {
      throw new Error()
    }
  }
}

class EngineMethods extends CarsInstance {
  startEngine = async (id: number): Promise<{ status: number; result: CarEngine }> => {
    try {
      const response = await fetch(`${this.engine}?id=${id}&status=started`, {
        method: 'PATCH',
      })
      return {
        status: response.status,
        result: (await response.json()) as CarEngine,
      }
    } catch {
      throw new Error()
    }
  }

  stopEngine = async (id: number) => {
    try {
      const response = await fetch(`${this.engine}?id=${id}&status=stopped`, {
        method: 'PATCH',
      })
      return {
        status: response.status,
        result: (await response.json()) as CarEngine,
      }
    } catch {
      throw new Error()
    }
  }

  drive = async (id: number) => {
    try {
      const response = await fetch(`${this.engine}?id=${id}&status=drive`, {
        method: 'PATCH',
      })
      return response.status
    } catch {
      throw new Error()
    }
  }
}

class WinnersInstance extends EngineMethods {
  getWinners = async (page: number, limit = 10, sort = 'time', order = 'ASC') => {
    try {
      const response = await fetch(`${this.winners}?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`)
      return {
        result: (await response.json()) as Winner[],
        totalCount: response.headers.get('X-Total-Count') || '0',
      }
    } catch {
      throw new Error()
    }
  }

  getWinner = async (id: number) => {
    try {
      const response = await fetch(`${this.winners}/${id}`)
      return {
        status: response.status,
        result: (await response.json()) as Winner,
      }
    } catch {
      throw new Error()
    }
  }

  createWinner = async (car: Winner) => {
    try {
      const response = await fetch(`${this.winners}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
      })

      return response.status
    } catch {
      throw new Error()
    }
  }

  deleteWinner = async (id: number) => {
    try {
      await fetch(`${this.winners}/${id}`, {
        method: 'DELETE',
      })
    } catch {
      throw new Error()
    }
  }

  updateWinner = async (car: Winner) => {
    try {
      await fetch(`${this.winners}/${car.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
      })
    } catch {
      throw new Error()
    }
  }
}

export const workDataInstance = new WinnersInstance()
