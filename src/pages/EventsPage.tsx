// pages/WatchPage.tsx
import React from 'react';
import EventContainer from '../components/cards/EventCard.tsx';
import LiveEmbed from '../components/cards/LiveEmbed.tsx';

const EventsPage: React.FC = () => {
  return ( 
  <>
  <LiveEmbed url="https://www.youtube.com/embed/QL0LUaxWUOI?si=RkMYzxC-fvRny0S1" title="testing" content="Agent Clove Trailer"/>
  <EventContainer Header="Test" Content="lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet " Footer="testing -c"/>
  <EventContainer Header="Test" Content="teseting the content for contents to the content of contents lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet " Footer="testing -c"/>

  </>
)
};

export default EventsPage;
