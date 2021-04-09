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

                    {/* <div className="profileBox">
                        <div className="profile-data">
                            <h5 className="profileName">Sixto Romero</h5>
                            <div className="profileMenuBox">
                                <h5 className="myProfile">Mi perfil</h5>
                                <button className="customButton">
                                    <i className="arrowDownIcon fa fa-angle-down"  aria-hidden="true"></i>
                                </button>
                            </div>
                        </div>
                        <div className="profileImg"></div>
                    </div>

                    <div className="profileResponsiveBox">
                        <div className="profileImg"></div>
                    </div> */}
                </div>
            </div>
            <div className="searchBoxResponsive">
                <input type="text" className="inputSearch" placeholder="Busca marcas y productos"/>
            </div>
        </div>

        // <nav className="navbar navbar-expand-sm">            
        //     <div className="logo">
        //         <a href="https://www.superfuds.com/" target="_blank">
        //             <Logo className="logo"/>
        //         </a>
        //     </div>            
        //     <div className="justifyInput">
        //         <SearchBar />
        //     </div>
            
        //     <button className="searchButton">
        //         <CartFill  className="searchIcon" />
        //     </button>			
        // </nav>

    )
}