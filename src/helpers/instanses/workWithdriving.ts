import { Body } from 'components/Body'
import { ModalWindow } from 'components/ModalWindow'
import { workWithPaginationGarage } from 'helpers/instanses'

import { roundNumber } from 'helpers/roundNumber'

import { workDataInstance } from './workDataInstance'

class Driving {
  memberArray: Array<{ carid: string | null; time: number }> = []

  async createOrUpdateWinner(id: number, time: number) {
    const { result, status } = await workDataInstance.getWinner(id)
    if (status === 404) {
      workDataInstance.createWinner({ id, wins: 1, time: Number(roundNumber(time)) })
    } else if (status === 200 && result.time > Number(roundNumber(time))) {
      workDataInstance.updateWinner({
        id,
        wins: (result.wins += 1),
        time: Number(roundNumber(time)),
      })
    }
  }

  animationCar(car: HTMLElement, time: number) {
    const carWidth = car.getBoundingClientRect().width
    const animation = car.animate([{ left: '0%' }, { left: `calc(100% - ${carWidth}px)` }], {
      duration: time,
      easing: 'ease-out',
    })
    this.memberArray.length = 0
    animation.play()
    animation.onfinish = async () => {
      car.style.left = `calc(100% - ${carWidth}px)`
      this.memberArray.push({ carid: car.getAttribute('carid'), time })
      if (this.memberArray.length === 1) {
        const carName = car.parentElement?.previousSibling?.lastChild?.textContent as string
        Body.append(ModalWindow(carName, time))
        await this.createOrUpdateWinner(Number(this.memberArray[0]?.carid), time)
      }
    }
  }

  getCar(id: number) {
    return document.querySelector(`[carid = '${id}']`) as HTMLElement
  }

  getButtonStart(id: number) {
    return document.querySelector(`button[btn-start = '${id}']`) as HTMLButtonElement
  }

  getButtonStop(id: number) {
    return document.querySelector(`[btn-stop = '${id}']`) as HTMLButtonElement
  }

  async startDriving(id: number) {
    const { status, result } = await workDataInstance.startEngine(id)
    if (status === 200) {
      const time = result.distance / result.velocity
      this.switchToDriveMode(id)
      this.animationCar(this.getCar(id), time)
      this.getButtonStart(id).disabled = true
      this.getButtonStop(id).disabled = false
    }
  }

  async stopDriving(id: number) {
    const { status } = await workDataInstance.stopEngine(id)
    if (status === 200) {
      this.getCar(id)
        .getAnimations()
        .map((anim) => anim.cancel())
      this.getCar(id).style.left = '0%'
      this.getButtonStart(id).disabled = false
      this.getButtonStop(id).disabled = true
    }
  }

  async switchToDriveMode(id: number) {
    const status = await workDataInstance.drive(id)
    if (status === 500) {
      this.getCar(id)
        .getAnimations()
        .map((anim) => anim.pause())
    }
  }
}

class DrivingForAllCars extends Driving {
  async raceAllcar() {
    ;(await workDataInstance.getCars(workWithPaginationGarage.getNumberPage())).items.map(
      async (car) => await this.startDriving(car.id as number),
    )
  }

  async resetAllcar() {
    const cars = (await workDataInstance.getCars(workWithPaginationGarage.getNumberPage())).items
    cars.forEach((car) => {
      this.stopDriving(car.id as number)
    })
  }
}

export const workWithDriving = new DrivingForAllCars()
