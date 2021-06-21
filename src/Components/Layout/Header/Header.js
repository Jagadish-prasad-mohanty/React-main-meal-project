import React from 'react';
import BackgroundImage from '../../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderIcon from '../HeaderIcon.js/HeaderIcon';

function Header() {
    return (
        <>
            <header className={classes.Header}>
                <h2>Redeye's Meals</h2>
                <HeaderIcon/>
            </header>
            <div className={classes["main-image"]}>
                <img src={BackgroundImage} alt="Background"/>
            </div>
        </>
    )
}

export default Header
