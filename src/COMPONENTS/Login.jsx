import React,{ useContext } from 'react'

import { theme } from '../App'


function Login() {
    const {mytheme}=useContext(theme)
  return (
    <div className={`form w-25 bg-${mytheme} rounded px-4 py-4 mt-5 mx-auto border border-primary border-1`}>
        <h1 className='text-primary'>Login</h1><br />
        <form className="form-group">
            <input type="text" className="form-control" id="username" placeholder="Enter username" /><br />
            <input type="password" className="form-control" id="password" placeholder="Enter password" />
            <button type="submit" className='btn btn-primary mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Login