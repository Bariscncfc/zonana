import React from 'react';
import './about.scss';
import bg from '../../assets/images/bg.jpg';

const About = () => {
    return(
        <div className="about">
            <div className="about__info-txt">
            <h1>About Us</h1>
            <h3>IT STARTED, QUITE SIMPLY, LIKE THIS...</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia, nostrud exercitation ullamco.
                Aenean commodo ligula eget dolor aenean massa. Cum sociis nat penatibu set magnis dis parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, Aenean commodo ligula eget dolor penatibu set magnis is parturient montes, nascetur ridiculus mus. quam felisorat, ultricies nec, pellentesque eu, pretium quis, sem. quat massa quis enim. Donec vitae sapien ut libero venenatis fauci Nullam quis ante. Etiam sit amet rci eget eros.</p>
            </div>
            <div className="about__info-img">
                <img src={bg} alt="about" />
            </div>
        </div>
    )
}

export default About;