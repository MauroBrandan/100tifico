const API = 'https://rickandmortyapi.com/api/character/'

const getCharactersNumber = async () => {
    try {
        const response = await fetch(API)
        const data = await response.json()
        let count = data.info.count

        return count
    } catch (error) {
        console.error('Fetch Error', error);
    }
}

export default getCharactersNumber