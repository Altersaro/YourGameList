import React from 'react';
import {ClientApiContext} from '../../ClientApi'
import {Link} from 'react-router-dom'
import {Allgenres} from './AllGenres.style';



function AllGenres() {

    const {allGenres} = React.useContext(ClientApiContext)

  return (
    <Allgenres className='col-10'>
        {allGenres.map(genre=>{
            return(
                <Link className='genre-container' to={`${'/Genres/' +genre.slug}`} key={genre.id}>
                    {genre.name}
                </Link>
            )
        })}
        

    </Allgenres>
  )
}

export default AllGenres