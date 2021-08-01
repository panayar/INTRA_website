import React, { useState, useRef, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";
import Button from "../buttons/Button";


function InfoBanner(props) {
  const [timerDays, setTimerDays] = React.useState('00')
  const [timerHours, setTimerHours] = React.useState('00')
  const [timerMinutes, setTimerMinutes] = React.useState('00')

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date('Oct 06 21 00:00:00').getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current)
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
      }
    }, 1000)
  }
  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current)
    }
  }, [])





  return (
    <div className={props.bg}>
      <img src={props.img} className="space" />
      <h2>{props.title}</h2>
      <h5>{props.subtitle}</h5>
      <p>{props.description}</p>
      <div className={props.timer} id="timer" >
          <section>
            <h1>{timerDays}</h1>
            <p>Dias</p>
          </section>
          <h1>:</h1>
          <section>
            <h1>{timerHours}</h1>
            <p>Horas</p>
          </section>
          <h1>:</h1>
          <section>
            <h1>{timerMinutes}</h1>
            <p>Minutos</p>
          </section>
        </div>

      <Button message={props.btnMessage} style={props.btnStyle} />
      <br></br>
      <br></br>
    </div >
  );
}

export default InfoBanner;
