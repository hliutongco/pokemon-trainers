const pokemonStore = []

class Pokemon {
  constructor(object) {
    this.id = object.id
    this.nickname = object.nickname
    this.species = object.species

    pokemonStore.push(this)
  }

  render(){
    return `${this.nickname} (${this.species}) <button id="button-${this.id}">RELEASE</button>`
  }

  createLi(){
    const pokemonLi = document.createElement('li')
    pokemonLi.innerHTML = this.render()
    pokemonLi.id = `pokemon-${this.id}`
    return pokemonLi
  }

  deletePokemon(){
    fetch(`http://localhost:3000/pokemons/${this.id}`, {
      method: 'DELETE'
    })
  }
}
