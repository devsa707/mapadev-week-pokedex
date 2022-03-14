const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pomemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const listagemPokemonAtivo = document.querySelector('.ativo')
        listagemPokemonAtivo.classList.remove('ativo')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const cartaoPokemonParaAbrir = document.getElementById('cartao-' + idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const listagemPokemonParaAtivar = document.getElementById(idPokemonSelecionado)
        listagemPokemonParaAtivar.classList.add('ativo')        

    })
})