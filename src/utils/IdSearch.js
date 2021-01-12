import getCharactersNumber from './getCharactersNumber'

async function idSearch (search){
    let count = await getCharactersNumber()
    
    if (parseInt(search) > count || parseInt(search) <= 0){
        alert(`Solo hay ${count} personajes, empezando por el 1`)
    }
        
    window.location.hash = `/${search}`
}

export default idSearch