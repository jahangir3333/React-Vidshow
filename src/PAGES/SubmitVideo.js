import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { shopping } from '../App'
function SubmitVideo() {

  let {handleProductAdd}=React.useContext(shopping)
// let [name,setName]=React.useState('')
// let [email,setEmail]=React.useState('')
// let [password,setPassword]=React.useState('')
// let [vname,setVname]=React.useState('')
// let [vlink,setVlink]=React.useState('')
// let [category,setCategory]=React.useState('')
// let [gender,setGender]=React.useState('')

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
      } = useForm()

const submitHandle=(data)=>{
    // console.log(data);
    // fetch("http://localhost:8080/", {namee:"fdsfsfdsf"})
    // .then((res)=>{console.log(res)})
    // .catch((error)=>console.log(error))
 axios.post("http://localhost:8080/",{data:data})
  .then((res)=>{console.log(res.data.data)})
  .catch((error)=>console.log(error))
}

  return (
    <>
    <div className="container d-flex">
    <form action="" onSubmit={handleSubmit(submitHandle)} className='w-50 mx-4'>
    <h1>Add Videos</h1>

    <input type="text" name='name' placeholder='Enter Full Name' {...register("name")}/>{errors.name}<br /><br />
    <input type="email" name='email' placeholder='Enter Email' {...register("email")}/>{errors.email}<br /><br />
    <input type="password" name='password' placeholder='Enter Password' {...register("password")} />{errors.password}<br /><br />
    <input type="video_name" name='vname' placeholder='Enter Video Title' {...register("vname")} />{errors.vname}<br /><br />
    <input type="video_link" name='vlink' placeholder='Enter Video Link' {...register("vlink")} />{errors.vlink}<br /><br />
    <select name="category" id="" {...register("category")}>
        <option value="music">Music</option>
        <option value="sports">Sports</option>
        <option value="movies">Movies</option>
        <option value="news">News</option>
        <option value="education">Education</option>
        <option value="gaming">Gaming</option>
        <option value="comedy">Comedy</option>
        <option value="entertainment">Entertainment</option>
        </select>{errors.category}  <br /><br />

        <input type="radio" name='gender' value='Male' {...register("gender")}/>
        <label htmlFor="Male">Male</label>&nbsp;&nbsp;
        <input type="radio" name='gender' value='Female' {...register("gender")}/>{errors.gender}
        <label htmlFor="Female">Female</label><br /><br />
        <input type="submit" value="Add Video" />
    </form> 


    <div className="addproduct w-50 mx-4">
      <h1>Add Product</h1>
      <form action="" onSubmit={handleProductAdd}>
      <input type="text" placeholder='Product Id' /><br /><br />
      <input type="text" placeholder='Product Name' /><br /><br />
      <input type="text" placeholder='Product Img link' /><br /><br />
      <input type="text" placeholder='Product Price' /><br /><br />
      <textarea placeholder='Product Details' rows='6' cols='50' /><br /><br />
      <input type="submit" value='Submit'/>


      </form>
      </div>   
    </div>   
    </>
  )
}

export default SubmitVideo