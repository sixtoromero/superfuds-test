import React from 'react'
import { Search } from 'react-bootstrap-icons';

import './SearchBar.css';

export const SearchBar = () => {
    return (
        <div className='searchInput input-group mb'>
            <input
                type='text'                
                className='searchInputStyle'
                placeholder='Busca marcas y productos...'                
            />
            <div className='styleButton input-group-append '>
                <span className='searchIcon'>
                    <Search />
                </span>
            </div>
        </div>
    );
}

export default SearchBar;