import React, {useEffect, useRef, useState} from "react";
import './menu.scss';
import {motion} from "framer-motion";

import images from "./images";


const  Menu = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [width]);

    return (
        <div className="menu">

            <div className="menu__items">
                <div className="menu__item">
                   <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
                       <motion.div className="menu__title">
                           <motion.h4>Today's Special</motion.h4>
                           <motion.p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, urna eu tincidunt consectetur, nisi nunc gravida nunc, euismod aliquet nisi nunc euismod aliquet nisi nunc.</motion.p>
                       </motion.div>
                       <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="inner-carousel">
                           {images.map( image => {
                               return (
                                   <motion.div className="item">
                                       <img src={image} alt=""/>
                                   </motion.div>
                               )
                           })}
                       </motion.div>
                   </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Menu;