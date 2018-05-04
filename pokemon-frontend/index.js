document.addEventListener('DOMContentLoaded', function(){

  const trainerList = document.getElementById('trainer-list')
  const pokemonList = document.getElementById('pokemon-list')
  const pokemonDiv = document.getElementById('pokemon-div')

  trainerList.addEventListener('click', function(event){
    pokemonList.innerHTML = ''
    const foundTrainer = trainerStore.find((trainer) => event.target.id === `trainer-${trainer.id}`)

    foundTrainer.pokemon.forEach((monster) => {
      const newPokemon = monster.createLi()
      pokemonList.appendChild(newPokemon)
    })
  })

  pokemonDiv.addEventListener('click', function(event){
    if(!event.target.id){
      return
    }

    if(event.target.id.includes('button')){
      const foundPokemon = pokemonStore.find((pokemon) => event.target.id === `button-${pokemon.id}` )
      foundPokemon.deletePokemon()
      pokemonList.removeChild(event.target.parentElement)
    }

  })

  fetch('http://localhost:3000/trainers')
  .then(response => response.json())
  .then(data => {
    for(let obj of data){
      const newTrainer = new Trainer(obj)
      const trainerLi = newTrainer.createLi()
      trainerList.appendChild(trainerLi)
    }
  })

})


// Prefix Verb   URI Pattern             Controller#Action
// trainers GET    /trainers(.:format)     trainers#index
//          DELETE /pokemons/:id(.:format) pokemons#destroy
