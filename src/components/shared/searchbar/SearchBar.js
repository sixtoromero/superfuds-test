import React from 'react'
import { Search } from 'react-bootstrap-icons';

export const SearchBar = () => {
    return (
        <div className='input-group mb'>
            <input
                type='text'
                className='form-control border-0'
                placeholder='Busca marcas y productos...'                
            />
            <div className='input-group-append '>
                <span className='input-group-text border-0 bg-white' id='basic-addon2'>
                    {/* <i className='far fa-search'></i> */}
                    <Search />
                </span>
            </div>
        </div>
    );
}

export default SearchBar;