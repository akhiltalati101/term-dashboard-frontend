import React, { useState, useEffect } from "react";
import moment from "moment";

function CountdownTimer(props) {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setTime(getCountdown()), 1000);
  }, []);

  const getCountdown = () => {
    let dueAt = props.dueAt;
    var timeLeft = moment.duration(
      moment(dueAt, "YYYY/MM/DD HH:mm").diff(moment())
    );

    let daysLeft = Math.floor(timeLeft.asDays());
    timeLeft.subtract(moment.duration(daysLeft, "days"));
    let hoursLeft = Math.floor(timeLeft.asHours());
    timeLeft.subtract(moment.duration(hoursLeft, "hours"));
    let minutesLeft = Math.floor(timeLeft.asMinutes());
    timeLeft.subtract(moment.duration(minutesLeft, "minutes"));
    let secondsLeft = Math.floor(timeLeft.asSeconds());

    console.log(daysLeft + " " + hoursLeft);
    return {
      days: daysLeft,
      hours: hoursLeft,
      minutes: minutesLeft,
      seconds: secondsLeft,
    };
  };
  if (time.days > 1 && time.hours > 0) {
    return `${time.days} days ${time.hours} hours`;
  } else if (time.days > 1) {
    return `${time.days} days ${time.hours} hours`;
  } else if (time.hours > 0) {
    return `${time.hours} hours ${time.minutes} minutes ${time.seconds} seconds`;
  } else {
    return `${time.minutes} minutes ${time.seconds} seconds`;
  }
}

export default CountdownTimer;
