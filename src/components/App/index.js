import React from 'react';

import quotes from 'src/data/quotes';

import Header from 'src/components/Header';
import Body from 'src/components/Body';

const App = () => (
  <div className="app">
    <Header />
    <Body quotes={quotes} />
  </div>
);

export default App;