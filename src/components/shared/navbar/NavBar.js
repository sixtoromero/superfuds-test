import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CartFill } from 'react-bootstrap-icons';

import SearchBar from '../searchbar/SearchBar';

import './NavBar.css';

import { Logo } from '../../shared/logo/logo';
import { ButtonCart } from '../buttoncart/ButtonCart';
import { Profile } from '../profile/Profile';

export const NavBar = () => {
    
    return (
        
        <div className="headerBox">
            <div className="containerBox">
                                
                <Logo />
                
                <div className="searchContent">
                    <SearchBar />
                    <ButtonCart />
                    <Profile />
                </div>
            </div>
            <div className="searchBoxResponsive">
                <input type="text" className="inputSearch" placeholder="Busca marcas y productos"/>
            </div>
        </div>
    )
}