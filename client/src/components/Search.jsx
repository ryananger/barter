import React, {useEffect, useRef} from 'react';
import  {IoClose as CloseIcon} from "react-icons/io5";

import st from 'ryscott-st';
import produceData from './produce.js';

const Search = function() {
  const searchInput = useRef(null);

  var handleSearch = function() {
    var found = [];

    var input = searchInput.current.value;

    st.searchInput = input;

    if (!input) {
      st.setProduce([]);
      return;
    }

    for (var key in produceData) {
      for (var variety in produceData[key]) {
        if ((key + variety).includes(input.toLowerCase())) {
          found.push({...produceData[key][variety], plant: key, variety: variety});
        }
      }
    }

    st.setProduce(found);
  };

  return (
    <div className='header anchor h'>
      {searchInput.current && searchInput.current.value && <CloseIcon className='closeIcon float' size={24} onClick={()=>{searchInput.current.value = ''}}/>}
      <input ref={searchInput} className='searchInput' placeholder='...search for local produce.' onKeyUp={handleSearch}/>
    </div>
  );
};

export default Search;