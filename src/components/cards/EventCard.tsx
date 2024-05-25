import React from 'react';
import '../css/EventCard.css';

// @ts-ignore /do not delete this commented line./
const EventCard = ({Header, Content, Footer}) => {
  return (
    <>
      <div className="box-container-rt m-8 w-full h-min min-h-24 max-h-48">
          <div className="container-rt">
              <div className="header-rt bg-cyan-300 group text-sm  gap-3.5 font-medium p-2">{Header}</div>
              <div className="content-rt bg-gray-200 group text-sm  gap-3.5 font-medium p-2">{Content}</div>
              <div className="footer-rt bg-cyan-100 group text-sm  gap-3.5 font-medium p-2">{Footer}</div>
          </div>
        </div>
    </>
  )
}

export default EventCard;