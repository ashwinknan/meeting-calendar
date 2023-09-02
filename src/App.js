// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const meetingSlots = [
    {
      title: '15 Minute Meeting Slot',
      description: 'Use this slot for quick catch-ups, FYIs or clarifications',
      link: 'https://ooud5deirh.larksuite.com/scheduler/eee033aaca05293a',
    },
    {
      title: '30 Minute Meeting Slot',
      description: 'Ideal for detailed discussions, video reviews or single agenda item discussions.',
      link: 'https://ooud5deirh.larksuite.com/scheduler/98df08de51b46ae3',
    },
    {
      title: '45 Minute Meeting Slot',
      description: 'Perfect for brainstorming sessions, long meetings, or discussions',
    },
  ];

  return (
    <div className="container">
      <h1 className="my-4 text-center">Ashwin's Meeting Calendar</h1>
      <div className="row">
        {meetingSlots.map((slot, index) => (
          <div className="col-lg-4 col-md-12 col-sm-12 mb-4" key={index}>  {/* Added mb-4 for bottom margin */}
            <div className="card custom-card">
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
