class SaveSelectCarNumber {
  id: number | undefined

  getId(id: number) {
    this.id = id
  }

  setId() {
    return this.id
  }
}

export const workWithSelectCar = new SaveSelectCarNumber()
