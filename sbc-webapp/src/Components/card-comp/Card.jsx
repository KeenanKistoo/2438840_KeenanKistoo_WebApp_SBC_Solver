import React from "react";
import './Card.css';
import CardImage from '../../Images/blank_card.png';


function Card(props) {
    return (
        <>
            <section className="card-input">
                <img className="card" src={CardImage} alt="Input Card Template"  style={{ gridColumn: props.value }}/> {/**Use of inline styling for */}
                <input className="input" type="text" placeholder="0" style={{ gridColumn: props.value }} />{/**positioning purposes. */}
                <button className="remove-btn" style={{ gridColumn: props.value}}>Remove</button>
                <button className="add-btn" style={{ gridColumn: props.value + 1 }}>+</button>
            </section>
        </>
    );
}

export default Card;
