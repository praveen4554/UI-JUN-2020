import React, {useState, useEffect} from 'react';
import axios from 'axios';
export default function HooksComponent() {
    const [name,setName] = useState('');
    const [val,setValue] = useState('');
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => setValue(json.title))

//     fetch('https://jsonplaceholder.typicode.com/posts',{
//         method: 'post',
//         body: JSON.stringify({
//         title: name,
//         body: val,
//         userId: 22
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8"
//     }
//     })
//   .then(response => response.json())
//   .then(json => console.log(json))
axios.post('https://jsonplaceholder.typicode.com/posts',{
    title: name,
    body:val,
    userId: 25
}).then((res)=>{
console.log(res);
}).catch((err)=>{
    console.log(err);
})
    // axios.get('https://jsonplaceholder.typicode.com/todos/1323').then((res)=>{
    //     console.log(res.data);
    // }).catch((err)=>{
    //     if(err.statusCode === 404){

    //     }
    //     console.log(err)
    // })
    },[name])
    return(
    <div>  
    <input type="text" value={name} onChange={(event)=> setName(event.target.value)}/>
    <input type="text" value={val} onChange={(event)=> setValue(event.target.value)}/>
    {name}
    {val}
    </div>
    )
}