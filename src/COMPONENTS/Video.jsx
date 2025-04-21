import React from 'react'
// import video1 from '../VIDEOS/cheque.mp4'
import './video.css'

function Video({name='No Name',url="https://www.youtube.com/embed/Q-4NtE3FS14"}) {
  return (
    <>
    <div className="video my-0">
    <h1 className='mx-2'>{name}</h1>
    <iframe width="350px" height="200px" src={url} title="no title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>

    </>
  )
}



export default Video

Video.defaultProps = {
  name: 'No Name',
  url: 'https://www.youtube.com/embed/-_zKab2r3fw?list=RD-_zKab2r3fw'
};