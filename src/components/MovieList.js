import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
  return (
    <div className='md:p-3 md:px-10 px-3 scrollbar-hide md:mb-2'>
         <h1 className='px-2 font-bold md:text-2xl text-xl md:py-6 py-3 text-white'>{title}</h1>
         <div className='flex w-[100%] overflow-x-scroll scrollbar-hide'>
            <div className='flex'>
                {movies && movies.map((movie,index)=>  <MovieCard key={index} posterPath={movie.poster_path}/>)}

            </div>
        </div> 
    </div>
  )
}

export default MovieList