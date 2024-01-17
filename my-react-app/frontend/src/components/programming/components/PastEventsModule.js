import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PastEventsModule = () => {
  const [pastEvents, setPastEvents] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/api/events/past')
      .then(response => {
        console.log(response.data);
        setPastEvents(response.data)
      })
      .catch(error => console.error('Error fetching past events:', error));
  }, []); 

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleViewDetails = (eventId) => {
    const selected = pastEvents.find(event => event._id === eventId);
    setSelectedEvent(selected);
  };

  const handleHideDetails = () => {
    setSelectedEvent(null);
  };

  if (!Array.isArray(pastEvents)) return <p>Loading...</p>;

  return pastEvents.length === 0 ? (
    <h2>No past events</h2>
  ) : (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-semibold mb-4">Past Events</h2>

      {selectedEvent ? (
        <div className="bg-white p-4 rounded-md shadow-md mb-4">
          <h3 className="text-lg font-semibold">{selectedEvent.name}</h3>
          <p className="text-gray-700 mb-2">Date: {selectedEvent.date}</p>
          <p className="text-gray-700 mb-2">Mode: {selectedEvent.mode}</p>
          <p className="text-gray-700 mb-2">The {selectedEvent.name} will help you in Skill Development, Networking, and gain Recognition</p> 
          <p className="text-gray-700 mb-2">Click on the <Link to="/register" className="text-blue-500">Register</Link> button to register for the {selectedEvent.name}</p> 
          <button onClick={handleHideDetails} className="text-blue-500 mb-2">
            Hide Details
          </button>
        </div>
      ) : (
        pastEvents.map(event => (
          <div key={event._id} className="bg-white p-4 rounded-md shadow-md mb-4">
            <h3 className="text-lg font-semibold">{event.name}</h3>
            <p className="text-gray-700 mb-2">Date: {event.date}</p>
            <p className="text-gray-700 mb-2">Mode: {event.mode}</p>
            <button
              onClick={() => handleViewDetails(event._id)}
              className="text-blue-500 underline"
            >
              View Details
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default PastEventsModule;
