import React from 'react';

const Quote = ({ name, year, text }) => {
    return (
    <article className="quote">
        <span className="quote-symbol">&#10077;</span>
        <p className="quote-text">{text}"</p>
        <span className="quote-symbol2">&#10078;</span>	
        <p className="quote-name">{name}</p>
    </article>
);
    }

export default Quote;