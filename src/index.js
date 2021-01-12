import router from './routes'

let inputSearch = document.getElementById('search')
let button = document.getElementById('search-button')

button.addEventListener('click', idSearch)

function idSearch (){
    let search = inputSearch.value

    if (parseInt(search) > 671 || parseInt(search) <= 0){
        alert('Solo hay 671 personajes, empezando por el 1')
    }

    window.location.hash = `/${search}`
}

window.addEventListener('load', router)
window.addEventListener('hashchange', router)