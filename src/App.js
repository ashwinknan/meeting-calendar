import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const meetingSlots = [
    {
      title: '15 Minute Meeting Slot',
      description: 'Use this slot for quick catch-ups, status updates, or introductory meetings.',
      link: 'https://ooud5deirh.larksuite.com/scheduler/eee033aaca05293a',
    },
    {
      title: '30 Minute Meeting Slot',
      description: 'Ideal for detailed discussions, team meetings, or client calls that require in-depth conversations.',
      link: 'https://ooud5deirh.larksuite.com/scheduler/98df08de51b46ae3',
    },
    {
      title: '45 Minute Meeting Slot',
      description: 'Perfect for brainstorming sessions, long meetings, or discussions that require ample time for detailed exploration.',
      link: 'https://ooud5deirh.larksuite.com/scheduler/3fbe7b9f3b3e080f',
    },
  ];

  return (
    <div className="container">
      <h1 className="my-4">Ashwin's Meeting Calendar</h1>
      <div className="row">
        {meetingSlots.map((slot, index) => (
          <div className="col-md-4" key={index}>
            <div className="card text-white bg-light mb-3" style={{ maxWidth: '20rem', minHeight: '10rem' }}>
              <div className="card-header">{slot.title}</div>
              <div className="card-body">
                <p className="card-text">{slot.description}</p>
                <a href={slot.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  Book Slot
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

