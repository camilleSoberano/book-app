'use client'
import React, {useState} from 'react';
import SearchGenre from './SearchGenre';

const SearchBar = () => {
    const [genre, setGenre] = useState('')
    const handleSearch = () => {
        console.log('search')
    }
  return (
   <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchGenre genre={genre} setGenre={setGenre}/>
        </div>
   </form>
  );
}

export default SearchBar;
