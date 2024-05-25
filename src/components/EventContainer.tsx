import React from 'react';
import EventCard from './cards/EventCard.tsx';
import './css/EventContainer.css';

const EventContainer = () => {
  return (
    <>
    <div className="flex flex-col flex-wrap h-screen ">
        <div className="flex flex-row min-w-fit">
            <EventCard Header="Test" Content="Testing the contetn" Footer="Testing another footer"/>
            <EventCard Header="Test" Content="Testing the contetn" Footer="Testing another footer"/>
            <EventCard Header="Test" Content="Testing the contetn" Footer="Testing another footer"/>
        </div>
        <div className="flex flex-col min-w-fit">
            <EventCard Header="Test" Content="Testing the contetn" Footer="Testing another footer"/>
            <EventCard Header="Test" Content="Testing the contetn" Footer="Testing another footer"/>
        </div>
    </div>
    
    </>
  )
}

export default EventContainer