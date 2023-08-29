export function MovieItem({ movie }) {
  return (
    <li className='card'>
      <img src={movie.Poster} className='card-img' />
      <h3 className='card-title'>{movie.Title}</h3>
      <p className='card-year'>{movie.Year}</p>
    </li>
  )
}
