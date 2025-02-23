import React from 'react';
import './Timeline.css';

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="timeline-event-date">{event.date}</div>
          <div className="timeline-event-content">{event.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;