import React from 'react';

const Quote = ({ name, year, text }) => {
    return (
    <article className="quote">
        <p className="quote-text">"{text}"</p>
        <p className="quote-name">{name}</p>
    </article>
);
    }

export default Quote;