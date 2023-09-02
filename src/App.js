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
      <h1 className="my-4 text-center">Ashwin's Meeting Calendar</h1> {/* Centered title */}
      <div className="row">
        {meetingSlots.map((slot, index) => (
          <div className="col-md-4 col-sm-12" key={index}>
            <div className={`card custom-card d-flex flex-column`} style={{ maxWidth: '20rem', minHeight: '10rem' }}> {/* Flex styles */}
              <div className="card-header">{slot.title}</div>
              <div className="card-body d-flex flex-column"> {/* Flex styles */}
                <p className="card-text">{slot.description}</p>
                <a href={slot.link} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer"> {/* mt-auto */}
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
