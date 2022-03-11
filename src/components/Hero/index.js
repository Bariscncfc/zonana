import React, {useState} from 'react';
import './hero.scss'
import {foods} from '../../assets/data/data';


const Hero = () => {
    return(
        <div className="hero">
            {foods.map((project, index) => {
                return (
                    <h1>{project.title}</h1>
                )
            })}
        </div>
    )
}

export default Hero;