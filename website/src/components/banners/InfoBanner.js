import React, { useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Banner.css";
import ModalPresale from "../Modals/ModalPresale";
import ModalWallet from "../Modals/ModalWallet";

function InfoBanner(props) {
  const [timerDays, setTimerDays] = React.useState("00");
  const [timerHours, setTimerHours] = React.useState("00");
  const [timerMinutes, setTimerMinutes] = React.useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Aug 12 21 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className={props.bg}>
      <img alt={props.alt} className={props.imgspace} src={props.img} />
      <h2>{props.title}</h2>
      <h5>{props.subtitle}</h5>
      <p className="fontMedium">{props.description}</p>
      <div className={props.timer}>
        <section className={props.space}>
          <h1>{timerDays}</h1>
          <p>Dias</p>
        </section>
        <h1>:</h1>
        <section className={props.space}>
          <h1>{timerHours}</h1>
          <p>Horas</p>
        </section>
        <h1>:</h1>
        <section className={props.space}>
          <h1>{timerMinutes}</h1>
          <p>Minutos</p>
        </section>
      </div>

      <div className={props.roadmap}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Mail"
            aria-label="Mail"
            aria-describedby="basic-addon2"
          ></input>
          <button
            class=" intraDarkBtn align-center"
            id="basic-addon2"
            type="submit"
          >
            Enviar
          </button>
        </div>
      </div>

      <button
        type="button"
        class={props.btnStyle}
        data-bs-toggle="modal"
        data-bs-target={props.modal}
      >
        {props.btnMessage}
      </button>
      <br></br>
      <br></br>

      {/* Modal */}
      <ModalPresale modalId={props.modalId} />

      <ModalWallet modal={props.idModal} />
    </div>
  );
}

export default InfoBanner;
