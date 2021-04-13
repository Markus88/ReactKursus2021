import React, { useState } from 'react';

function Eksempel02KaldUseState(): React.ReactElement {
  // Declare a new state variable, which we'll call "count"
  const [ost, osteCounter] = useState(22);

  return (
    <div>
      <p>You clicked {ost} times</p>
      {<button onClick={() => osteCounter(ost + 1)}>
        Click me
      </button>}
    </div>
  );
}
export default(Eksempel02KaldUseState);