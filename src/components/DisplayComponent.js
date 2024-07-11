
import React, { useState } from 'react';

function Display(props) {
  const [name, setName] = useState(props.name);
  const [address, setAddress] = useState(props.address);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  return (
    <div>
      Name:<input type="text" value={name} onChange={handleNameChange} />
      Address:<input type="text" value={address} onChange={handleAddressChange} />
    </div>
  );
}

export default Display;