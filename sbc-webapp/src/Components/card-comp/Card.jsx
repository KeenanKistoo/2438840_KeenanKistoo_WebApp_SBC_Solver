import React from "react";
import './Card.css';
import CardImage from '../../Images/blank_card.png';
import ImageIcon from '../../Images/plus_icon.png';

function Card() {
    let value = 1;
    return (
        <>
            <section className="card-input">
                <img className="card" src={CardImage} alt="Input Card Template"  style={{ gridColumn: value }}/> {/**Use of inline styling for */}
                <input className="input" type="text" placeholder="0" style={{ gridColumn: value }} />{/**positioning purposes. */}
                <button className="add-btn" style={{ gridColumn: value + 1 }}>+</button>
            </section>
        </>
    );
}

export default Card;
