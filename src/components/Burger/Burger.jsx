import './Burger.scss';
import React from 'react';

const Burger = ({className, onClick}) => {
    return (
        <div className='burger-container' onClick={onClick}>
            <div className={`${className} burger`}></div>
            <div className={`${className} burger`}></div>
            <div className={`${className} burger`}></div>
        </div>
    );
};

export default Burger;