import router from './routes'
import IdSearch from './utils/IdSearch'

let inputSearch = document.getElementById('search')
let button = document.getElementById('search-button')

button.addEventListener('click', () => IdSearch(inputSearch.value))

window.addEventListener('load', router)
window.addEventListener('hashchange', router)