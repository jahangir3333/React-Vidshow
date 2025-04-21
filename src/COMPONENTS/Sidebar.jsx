import React, { useContext } from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import {theme} from '../App'

function Sidebar() {
  let {mytheme}=useContext(theme)
    let style={
        display:'flex',
        flexDirection:'column',
        padding:'10px',
        color:`${mytheme==='dark'?'white':'black'}`,
        textDecoration:'none',
        borderBottom:`1px solid ${mytheme==='dark'?'white':'black'}`,
    }
    
  return (
    <>
    <div className={`sidebar bg-${mytheme}`}>
    <ul>
        <li><Link to='/' style={style}>Home</Link></li>
        <li><Link to='/' style={style}>Shorts</Link></li>
        <li><Link to='/' style={style}>Subscriptions</Link></li>
        <li><Link to='/' style={style}>History</Link></li>
        <li><Link to='/' style={style}>Playlists</Link></li>
        <li><Link to='/' style={style}>Your Videos</Link></li>
        <li><Link to='/' style={style}>Watch Later</Link></li>
        <li><Link to='/' style={style}>Liked Videos</Link></li>
        <li><Link to='/' style={style}>Trending</Link></li>
        <li><Link to='/' style={style}>Movies</Link></li>
        <li><Link to='/' style={style}>Music</Link></li>
        <li><Link to='/' style={style}>Gaming</Link></li>
        <li><Link to='/' style={style}>News</Link></li>
        <li><Link to='/' style={style}>Sports</Link></li>
        <li><Link to='/' style={style}>Live</Link></li>
    </ul>
    </div>
    </>
  )
}

export default Sidebar