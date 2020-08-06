import React from 'react';

export  const InputComponent = React.forwardRef((props,ref)=>{
    return(
        <div id="fName">
         <input type="text" ref={ref}/>
        </div>
    )
})