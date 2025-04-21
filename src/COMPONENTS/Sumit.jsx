import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Sumit() {
    let [name,setName]=useState()

    useEffect(()=>{
        axios.post("http://localhost:8080/",{names:name})
        .then((res)=>console.log(res.data))
        .catch(error=>console.log(error))
    },[name])


    const handleSubmit=(e)=>{
        e.preventDefault()
        

        console.log(name)
    }

  return (
<>
<form action="" method="get" onSubmit={(e)=>handleSubmit(e)}>
<input type="text" name='username' onChange={(e)=>setName(e.target.value)}/>
<input type="submit" />


</form>
</>

)
}

export default Sumit