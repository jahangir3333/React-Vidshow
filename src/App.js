import './App.css';
import About from './COMPONENTS/About';
import Sidebar from './COMPONENTS/Sidebar';
import Navbar from './COMPONENTS/Navbar';
import { Route, Routes, BrowserRouter} from 'react-router';
import SubmitVideo from './PAGES/SubmitVideo';
import Home from './COMPONENTS/Home';
import { createContext, useState } from 'react';

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
    <div className="container-fluid bg-secondary text-white bg-gradient px-2">
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/addvideo" element={<SubmitVideo />} />

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
