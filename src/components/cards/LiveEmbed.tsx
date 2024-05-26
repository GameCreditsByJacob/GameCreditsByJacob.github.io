import React from 'react'
import Iframe from 'react-iframe';

// @ts-ignore /do not delete this commented line./
const LiveEmbed = ({url, title, content}) => {
  return (
    <>
    <div className='px-5 bg-black/50 rounded-lg text-slate-200 h-fit'>
      <div className="text-xl text-bold py-2 text-left">{title}</div>
        <div className="">
        <Iframe 
        url={url}
        display="block"
        title={title}
        allow="accelerometer"
        referrerpolicy="strict-origin-when-cross-origin"
        className="w-auto h-auto"
        encrypted-media
        position="relative"/>
        </div>
        <div className="text-l text-left pb-5">{content}</div>
    </div>
  </>
  )
};
export default LiveEmbed;