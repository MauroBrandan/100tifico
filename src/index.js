import router from './routes'
import IdSearch from './utils/IdSearch'
import getCharactersNumber from './utils/getCharactersNumber'

let inputSearch = document.getElementById('search')
let button = document.getElementById('search-button')
let p = document.getElementById('search-p')
const count = getCharactersNumber()

count
    .then(count => p.innerHTML = `Para buscar un personaje en especifico ingrese un ID. Puede ingresar desde 1 hasta ${count}.`)
    .catch(error => console.error('Fetch Error', error))

button.addEventListener('click', () => IdSearch(inputSearch.value))

window.addEventListener('load', router)
window.addEventListener('hashchange', router)