import React, { useState } from "react";

function Eksempel02KaldUseState(): React.ReactElement {
  // Declare a new state variable, which we'll call "count"
  const [ost, osteCounter] = useState(22); // <-- Første indput, er en variable [ost, ], og andet input [, osteCounter] er en function.

  return (
    <div>
      <p>You clicked {ost} times</p>
      {<button onClick={() => osteCounter(ost + 1)}>Click me</button>}
    </div>
  );
}
export default Eksempel02KaldUseState;
