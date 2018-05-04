const trainerStore = []

class Trainer {
  constructor(object){
    this.id = object.id
    this.name = object.name
    this.pokemon = []

    object.pokemon.forEach((monster) => {
      const newPokemon = new Pokemon(monster)
      this.pokemon.push(newPokemon)
    })

    trainerStore.push(this)
  }

  createLi() {
    const trainerLi = document.createElement('li')
    trainerLi.id = `trainer-${this.id}`
    trainerLi.innerText = `${this.name}`
    return trainerLi
  }


}
