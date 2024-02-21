import React, {useState} from 'react';
import {FaCartPlus as AddToCartIcon} from 'react-icons/fa';

import st from 'ryscott-st';
import Search from './Search.jsx';

const Barter = function() {
  const [produce, setProduce] = st.newState('produce', useState([]));

  var renderProduce = function() {
    if (!produce[0]) {
      if (st.searchInput) {
        return (
          <div className='placeholder'>
           I couldn't find anything.
          </div>
        );
      }

      return (
        <div className='placeholder'>
          If you like food, you're in the right place.
        </div>
      );
    }

    if (!produce[0]) {
      return (
        <div className='placeholder'>
          If you like food, you're in the right place.
        </div>
      );
    }

    var rendered = [];

    produce.map(function(entry) {
      rendered.push(
        <div className='produceCard v'>
          <div className='h' style={{width: '100%'}}>
            {entry.plant}
            <h4 style={{textAlign: 'right'}}>{entry.variety}</h4>
          </div>
          <div className='h' style={{width: '100%', alignItems: 'center'}}>
            {/* <div>~{entry.available}lbs available</div> */}
            <div style={{fontSize: '22px'}}>${entry.price}/lb</div>
            <AddToCartIcon className='icon grow' size={24}/>
          </div>
        </div>
      );
    });

    return rendered;
  };

  return (
    <div className='barter card v'>
      <Search />
      <div className='produceContainer h'>
        {renderProduce()}
      </div>
    </div>
  );
};

export default Barter;