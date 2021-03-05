import React from 'react';

//wrapper div to contain all rendered HTML components
function Wrapper({ children }) {
  return (
      <div className="wrapper">
        { children }
      </div>
  );
}

export default Wrapper;