import React from 'react';
import './Counter.css';
import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <span>The race is already finished.</span>;
    } else {
        var months = Math.floor(days/30);
        days = days % 30;
        return <span>{months} months {days} days {hours} hours {minutes} minutes and {seconds} seconds</span>;
    }
};


function Counter() {  
    return (
        <div> 
            <div className="container container-counter">
                <img src={require('../media/start.jpeg')} className="w-75" alt="Page not found"/>
                <div className="centered-counter text-shadow text-light text-shrink">
                    <p className="my-0">The race will start in:</p>
                    <Countdown date={new Date('2020-09-06T10:00:00')} renderer={renderer} />
                </div>
            </div>
      </div>
    )  
  }  
  export default Counter