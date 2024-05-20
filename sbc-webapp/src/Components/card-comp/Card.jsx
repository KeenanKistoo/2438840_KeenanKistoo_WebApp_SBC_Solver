import React from "react";
import './Card.css';
import CardImage from '../../Images/blank_card.png';

function Card() {
    return (
        <>
            <section className="card-input">
                <img className="card" src={CardImage} alt="Card" />
                <input className="input" type="text" placeholder="0"/>
            </section>
        </>
    );
}

export default Card;
