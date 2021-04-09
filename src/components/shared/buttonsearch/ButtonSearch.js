import React from 'react'

import './ButtonSearch.css';

export const ButtonSearch = () => {
    return (
        <div className="searchDiv">
            <button className="searchButtonStyle" >
                <i className="searchIconStyle fa fa-search" aria-hidden="true"></i>
            </button>
        </div>
    )
}
