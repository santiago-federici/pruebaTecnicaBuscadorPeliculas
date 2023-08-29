const API_KEY = 'eafc75c0'
const ENDPOINT = 'https://www.omdbapi.com/'

export const findMovies = async (search) => {
  const res = await fetch(`${ENDPOINT}?apikey=${API_KEY}&s=${search}`)
  const data = await res.json()
  const { Search } = data

  return Search
}
