import Video from './Video'
import {theme} from '../App'
import { useContext } from 'react'
function Content() {
  let {mytheme}=useContext(theme)
  let style={
    backgroundColor:`${mytheme==='dark'?'black':'white'}`,
  }
  
  return (
    <>
    <h1 className='fw-bold text-warning '>All Albums</h1>
    <div className="videos text-start d-flex flex-row flex-wrap text-primary" style={style}>
    <Video name='SATISFYA' url='https://www.youtube.com/embed/-_zKab2r3fw?list=RD-_zKab2r3fw'/>
    <Video name='Hacking' url='https://www.youtube.com/embed/w4nqr3z2mNo'/>
    <Video name='Excel Macros' url='https://www.youtube.com/embed/Q-4NtE3FS14'/>
    <Video/>
    <Video/>
    <Video/>
    <Video/>
    <Video/>
    </div>
    </>
  )
}
  

export default Content