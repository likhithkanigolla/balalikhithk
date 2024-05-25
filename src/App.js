import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [timeRemaining, setTimeRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 60);
      const timeDifference = targetDate - now;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000); // Update every second

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Likhith Kanigolla Portfolio</h1>
      <p className="paragraph">Coming Soon...</p>
      <div className="timer">
        {timeRemaining.days} days {timeRemaining.hours} hours {timeRemaining.minutes} minutes {timeRemaining.seconds} seconds remaining
      </div>
    </div>
  );
}

export default App;
