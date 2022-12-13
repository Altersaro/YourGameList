import React from 'react'
import { FormStyle } from './Search.style'
import {useNavigate} from 'react-router-dom'


function Search() {

    const [searchTerm, setSearchTerm] = React.useState('');
    const navigate = useNavigate();

    const handleChange = (e) =>{
        setSearchTerm(e.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        let slug = searchTerm.split(' ').join('-').toLocaleLowerCase()
        navigate('/search/'+ slug)

    }





  return (
    <div>
        <FormStyle onSubmit={onSubmit}>
            <input type="text" value={searchTerm} onChange={handleChange}  ></input>
            <button className='search-button'><i className="bi bi-search"></i></button>
        </FormStyle>
    </div>
  )
}

export default Search