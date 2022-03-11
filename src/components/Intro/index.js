import React from 'react';
import './intro.scss';


const Intro = () => {
    return (
        <div className="intro">
            <div className="intro__text">
                <h1>
                    Dinner with us <span className="intro__text--name">Friends</span>
                </h1>
                <h2>
                    Accidental appearances
                </h2>
                <button>BOOK MY TABLE</button>
            </div>
        </div>
    )
}

export default Intro;