import { useMovies } from './hooks/useMovies'
import './App.css'
import { useEffect, useRef, useState } from 'react'
import { MoviesContainer } from './components/MoviesContainer'

function App() {
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const { movies, getMovies } = useMovies(search)
  const isFirstTime = useRef(true)

  const handleClick = () => {
    getMovies()
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    if (newSearch.startsWith(' ')) return
    setSearch(newSearch)
    // getMovies()
  }

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = search == ''
      return
    }

    if (search == '') {
      setError('You cant search an empty movie ')
      return
    }

    setError(null)
  }, [search])

  return (
    <main>
      <div>
        <input type='text' placeholder='The Avengers...' value={search} onChange={handleChange} />
        <button onClick={handleClick}>
          Search
        </button>
      </div>
      <p>{error}</p>

      <section>
        <MoviesContainer movies={movies} />
      </section>
    </main>
  )
}

export default App
