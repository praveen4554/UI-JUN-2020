import React from 'react';

function Child(props) {
  return (
    <div>
    <button onClick={()=>props.updateCall('fhgfgfhfhf')}>Update parent</button>
    </div>
  );
}

export default Child;
