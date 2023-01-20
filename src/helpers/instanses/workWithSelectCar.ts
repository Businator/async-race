class SaveSelectCarNumber {
  id: number | undefined

  setId(id: number) {
    this.id = id
  }

  getId() {
    return this.id
  }
}

export const workWithSelectCar = new SaveSelectCarNumber()
