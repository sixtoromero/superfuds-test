import React from 'react'

import './Profile.css';

export const Profile = () => {
    return (
        <>
            <div className="profileStyle">
                <div className="profile-data">
                    <h5 className="nameStyle">Sixto Romero</h5>
                    <div className="menuStyle">
                        <h5 className="myProfile">Mi perfil</h5>
                        <button className="buttonStyle">
                            <i className="displayIconStyle fa fa-angle-down"  aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="profile">
                {/* <div className="profileImg"></div> */}
                <img src="../../../assets/images/foto.jpg" />
                <label>HOLA</label>
            </div>
        </>
    )
}
