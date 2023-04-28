import React from 'react'
import Card from './Card'

const CardGroup = ({movies}) => {
  return (
    <div className='data-grid'>
         {movies.map(movie => <Card key={movie.episode_id} list={movie} /> 
        )} 
        </div>
  )
}

export default CardGroup