import React from 'react';
import ReactDOM from 'react-dom/client';
import CloneGame from './Game/CloneGame';
import Calculator from './Calculator/Calculator'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Calculator></Calculator>
      {/* <CloneGame></CloneGame> */}
  </React.StrictMode>
);

