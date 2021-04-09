import React from 'react'

import { ReactComponent as LogoIcon } from '../../../assets/images/logo.svg';

import './logo.css';

export const Logo = () => {
    return (
        <div className="logoHeader">
            <a href="https://www.superfuds.com/" target="_blank">
                <LogoIcon className="logo" />
            </a>
        </div>
    )
}
