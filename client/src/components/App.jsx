import React from 'react';

import 'styles';
import Nav from './Nav.jsx';
import Barter from './Barter.jsx';

const App = function() {
  return (
    <div className='app v'>
      <div className='barterContainer anchor'>
        <Nav />
        <Barter />
      </div>

    </div>
  );
};

export default App;