import React from "react";
import './Header.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({black}) => {
    return (
        <header className = {black ? 'black' : ''}>
            <div className = "header--logo">
                <a href= "/">
                    <img src="https://static.wixstatic.com/media/5aef7a_2138326cbf5b4cffb4be8290cbf540ab~mv2.png/v1/crop/x_0,y_97,w_500,h_281/fill/w_289,h_169,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/5aef7a_2138326cbf5b4cffb4be8290cbf540ab~mv2.png" alt="CodeFlix"/>
                </a>
            </div>
        </header>
    );
}