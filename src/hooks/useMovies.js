import { useRef, useState } from 'react'
import { findMovies } from '../services/movies'

export function useMovies(search) {
  const [movies, setMovies] = useState([])
  const prevSearch = useRef(search)

  const getMovies = () => {
    if (search == prevSearch.current) return
    prevSearch.current = search
    findMovies(search).then(newMovies => setMovies(newMovies))
  }

  return { movies, getMovies }
}
