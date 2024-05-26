// pages/WatchPage.tsx
import React from 'react';
import EmbedCard from '../components/cards/LiveEmbed.tsx';

const WatchPage: React.FC = () => {
  return <><div className="flex pt-5 mx-auto gap-4 flex-row">
    <div><EmbedCard url="https://www.youtube.com/embed/fky2RXiW8iI?si=1eJZq2lZjsVyYEs-" title="Valorant Chapmionship" content=""/></div>
    <div><EmbedCard url="https://www.youtube.com/embed/VNVHIzbbo5c?si=cQI-zg5YxHFCFVtl" title="Mobile Legends MPL" content=""/></div>
    
    </div>
  </>
};



export default WatchPage;
