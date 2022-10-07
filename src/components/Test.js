import React, { useEffect, useState } from 'react'
const Test = (props) => {
    console.log(props);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    // console.log(name , email , password);
    // useEffect(()=>{
    //     setNumber(7);
    // },[])

    const inputHandler = (e) =>{
        console.log(e.target.name);
    }
    const buttonHandler = () =>{
        props.setData({
            fname:'aya'
        })
    }
  return (
    <>
    <div>{name}</div>
    <div>{email}</div>
    <div>{password}</div>
    {/* <input name='name' value={name} onChange={(e)=>inputHandler(e)}/>
    <input name='email' value={email} onChange={(e)=>inputHandler(e)}/>
    <input name='password' value={password} onChange={(e)=>inputHandler(e)}/> */}
    <button onClick={buttonHandler}>click me</button>
    </>
  )
}

export default Test