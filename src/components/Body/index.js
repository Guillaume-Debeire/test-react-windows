import React from 'react';
import PropTypes from 'prop-types';

import Quote from './Quote'

import './styles.scss';

const Body = ({ quotes }) => (
    <main className="body">
        <div className="body-header">
            <h1 className="body-header-title">Citations</h1>
            <h3 className="body-header-subtitle">Du jour</h3>
        </div>
        <div className="quotes">
            {quotes.map((quote) => (
                <Quote key={quote.id} {...quote} />
            ))}
        </div>
    </main>
);

Body.propTypes = {
    quotes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
}

export default Body;