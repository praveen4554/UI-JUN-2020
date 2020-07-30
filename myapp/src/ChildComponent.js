import React from 'react';

function Child(props) {
  return (
    <div>
    <input type="firstName" onChange={(event)=>this.props.updatePersonalInfo(event.target.value)}/>
    <button onClick={()=>props.updateCall('fhgfgfhfhf')}>Update parent</button>
    </div>
  );
}

export default Child;
