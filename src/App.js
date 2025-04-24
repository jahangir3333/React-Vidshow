import './App.css';
import About from './COMPONENTS/About';
import Sidebar from './COMPONENTS/Sidebar';
import Navbar from './COMPONENTS/Navbar';
import { Route, Routes, BrowserRouter} from 'react-router';
import SubmitVideo from './PAGES/SubmitVideo';
import Home from './COMPONENTS/Home';
import { createContext, useState } from 'react';
import Login from './COMPONENTS/Login';
import Content from './COMPONENTS/Content';
import ShoppingHome from './COMPONENTS/SHOPPING/ShoppingHome';
import Cart from './COMPONENTS/SHOPPING/Cart';

const theme=createContext();
const shopping=createContext();

function App() {
  let [mytheme,setMytheme]=useState("dark")
  let [cart,setCart]=useState([])

  const handletheme=()=>{
    if(mytheme==="dark"){
      setMytheme("light")
    }
    else{
      setMytheme("dark")
    }
  }


  const addCart=(pn,pi,pp)=>{
    let prod={
      id:Math.floor(Math.random()*1000),
      name:pn.current.innerText,
      price:pp.current.innerText,
      img:pi.current.src
    }
    
    setCart([...cart,prod])
  }

  const emptyCart=()=>{
    setCart([])
 
  }


  const handleProductAdd=(e)=>{

  }

  return (
    <>
    <theme.Provider value={{mytheme,handletheme}}>
      <shopping.Provider value={{cart,setCart,addCart,emptyCart,handleProductAdd}}>
    <BrowserRouter>
    <Navbar/>
    <div className="container-fluid px-0 d-flex text-center">
    <Sidebar/>
    <div className={`container-fluid bg-${mytheme==='dark'?'dark':'warning'} text-white bg-gradient px-2 py-2`}>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/content" element={<Content />}/>
      <Route path="/about" element={<About />} />
      <Route path="/addvideo" element={<SubmitVideo />} />
      <Route path="/login" element={<Login/>} />
      <Route path='/shopping' element={<ShoppingHome/>}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
    </div>
    </BrowserRouter>
    </shopping.Provider>
    </theme.Provider>
    </>
  );
}

export default App;
export {theme}
export {shopping} 
