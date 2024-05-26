import React from 'react';
import '../css/EventCard.css';


// @ts-ignore /do not delete this commented line./
const EventCard = ({Header, Content, Footer}) => {
  return (
    <>
    <div className="flex">
      <div className="bg-black/70 rounded-lg m-8 h-fit max-w-sm">
          <div className="container-rt text-slate-100">
              <div className="p-3 header-rt group text-xl text-left font-medium">{Header}</div>
              <div className="content-rt group text-l font-medium p-2">{Content}</div>
              <div className="footer-rt group text-sm font-medium p-4">{Footer}</div>
          </div>
        </div>
        </div>

    </>
  )
}

export default EventCard;