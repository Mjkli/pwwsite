import React from 'react';
import '../App.css'
import { Button } from './Button';
import './Herosection.css';

function Herosection(){
    return (
        <div className="hero-container">
            <video src="/videos/video1.mp4" autoPlay loop muted />
            <h1>Look Here!</h1>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>START</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch TRALIERS <i className ="far fa-play-circle"/></Button>
            </div>

        </div>
    )
}

export default Herosection