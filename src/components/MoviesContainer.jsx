import { MovieItem } from './MovieItem'

export function MoviesContainer({ movies }) {
  return (
    <ul className='movies-container'>

      {
        movies &&
        movies.map(movie => (

          <MovieItem key={movie.imdbID} movie={movie} />
        ))
      }
    </ul>
  )
}
