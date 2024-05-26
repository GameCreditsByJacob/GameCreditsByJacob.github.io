import React from 'react'
import Iframe from 'react-iframe';

// @ts-ignore /do not delete this commented line./
const LiveEmbed = ({url, title}) => {
  return (
    <>
    <div className='container px-10  bg-black/50 rounded-lg'>
    <Iframe 
  url={url}
  width="540px"
  height="278px"
  display="block"
  title={title}
  allow="accelerometer"
  referrerpolicy="strict-origin-when-cross-origin"
  encrypted-media
  position="relative"/>
  </div>
  </>
  )
};
export default LiveEmbed;