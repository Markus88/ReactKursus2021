import React, { useState } from "react";

function MyName() {
  const [name, setName] = useState("");

  function handleChange(evt: {
    target: { value: React.SetStateAction<string> };
  }) {
    setName(evt.target.value);
  }

  return (
    <div>
      <h1>My name is: {name}</h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export default MyName;
