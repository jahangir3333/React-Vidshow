import axios from 'axios';
import React from 'react'

function SubmitData() {

    const Sendtobackend=(e)=>{
        e.preventDefault();

        axios.post("http://localhost:8080/")
        
    }


  return (
    <>
    <h1>Send Data to Backend ..</h1>
    <div className="container text-start">
        <form onSubmit={Sendtobackend}>
            <input type="number" name='id' placeholder='Enter Id'/><br /><br />
            <input type="text" name='name' placeholder='Enter Name'/><br /><br />
            <input type="email" name='email' placeholder='Enter Email'/><br /><br />
            <input type="password" name='pass' placeholder='Enter Password'/><br /><br />
            <input type="contact" name='contact' placeholder='Enter Contact'/><br /><br />
            <textarea name='address'placeholder='Enter Address' rows='5' cols='50'/><br /><br />
            <input type="submit" value='Register' />
        </form>
    </div>
    </>
  )
}

export default SubmitData