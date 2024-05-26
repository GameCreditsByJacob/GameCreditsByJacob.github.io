import React from 'react'
import Iframe from 'react-iframe';

// @ts-ignore /do not delete this commented line./
const LiveEmbed = ({url, title}) => {
  return (
    <>
    <div className='px-10 bg-black/50 rounded-lg'>
      <div className="text-xl py-2 text-left text-slate-200">{title}</div>
      <div className="pb-6">
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
  </div>
  </>
  )
};
export default LiveEmbed;