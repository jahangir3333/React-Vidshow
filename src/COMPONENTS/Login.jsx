import React,{ useContext } from 'react'

import { theme } from '../App'



const handleLogin=(e)=>{
    e.preventDefault()
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    console.log(username,password)
    if(username==="admin" && password==="admin"){
        alert("Login Successful")
        window.location.href="/"
    }
    else{
        alert("Invalid Credentials")
    }

}

function Login() {
    const {mytheme}=useContext(theme)
  return (
    <div className={`form w-25 bg-${mytheme} rounded px-4 py-4 mt-5 mx-auto border border-primary border-1`}>
        <h1 className='text-primary'>Login</h1><br />
        <form className="form-group" onSubmit={handleLogin}>
            <input type="text" className="form-control" id="username" placeholder="Enter username" /><br />
            <input type="password" className="form-control" id="password" placeholder="Enter password" />
            <button type="submit" className='btn btn-primary mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Login