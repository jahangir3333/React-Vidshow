import React,{ useContext, useState } from 'react'
import { theme } from '../App'
import Home from './Home'
import { useNavigate } from 'react-router-dom'





function Login() {
    const {mytheme}=useContext(theme)
    const navigate=useNavigate()

    const {userdata,setUserdata}=useState(null)

    const handleLogin=(e)=>{
        e.preventDefault()
        let username=document.getElementById("username").value
        let password=document.getElementById("password").value
        console.log(username,password)
        if(username==="admin" && password==="admin"){
            alert("Login Successful")
            navigate("/shopping")
            

        }
        else{
            alert("Invalid Credentials")
        }
    
    }
  return (
    <div className={`form w-25 bg-${mytheme} rounded px-4 py-4 mt-5 mx-auto border border-primary border-1`}>
        <h1 className='text-primary'>Login</h1><br />
        <form className="form-group" onSubmit={handleLogin}>
            <input type="text" className="form-control" id="username" placeholder="Enter username" /><br />
            <input type="password" className="form-control" id="password" placeholder="Enter password" />
            <button type="submit" className='btn btn-primary mt-2'>Submit</button>
        </form>
        <div id="mojoauth-passwordless-form"></div>
        <pre>{JSON.stringify(userdata, null, 4)}</pre>

    </div>
  )
}

export default Login