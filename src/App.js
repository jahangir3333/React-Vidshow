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

const theme=createContext();

function App() {
  let [mytheme,setMytheme]=useState("dark")

  const handletheme=()=>{
    if(mytheme==="dark"){
      setMytheme("light")
    }
    else{
      setMytheme("dark")
    }
  }

  return (
    <>
    <theme.Provider value={{mytheme,handletheme}}>
    <BrowserRouter>
    <Navbar/>
    <div className="container-fluid px-0 d-flex text-center">
    <Sidebar/>
    <div className={`container-fluid bg-${mytheme==='dark'?'dark':'warning'} text-white bg-gradient px-2`}>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/content" element={<Content />}/>
      <Route path="/about" element={<About />} />
      <Route path="/addvideo" element={<SubmitVideo />} />
      <Route path="/login" element={<Login/>} />
      <Route path='/shopping' element={<ShoppingHome/>}/>
      </Routes>
    </div>
    </div>
    </BrowserRouter>
    </theme.Provider>
    </>
  );
}

export default App;
export {theme}
