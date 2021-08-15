import React, { FormEvent, useEffect } from "react";
import { useTimer } from "../../hooks/useTimer";
import { useForm, SubmitHandler } from "react-hook-form";

import Modal from "react-modal";
import Switch from "react-switch";

import { useModalStyles } from "../../hooks/useModalStyles";

import { FcDataConfiguration } from "react-icons/fc";
import { BsPlayFill } from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";
import { AiFillCloseCircle } from 'react-icons/ai';

import "./style.scss";

export function Home() {
  const {
    time,
    setTime,
    timeShortBreak,
    setTimeShortBreak,
    active,
    setActive,
    shortBreak,
    setShortBreak,
    minuteLeft,
    minuteRight,
    secondLeft,
    secondRight,
    minuteShortBreakLeft,
    minuteShortBreakRight,
    secondShortBreakLeft,
    secondShortBreakRight,
    startCountdown,
    pauseCountdown,
  } = useTimer();

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000); // A cada 1 segundo, sera retirado -1 da varialvel time.
    } else if (time === 0) {
      setTime(25 * 60);
      setActive(false);
      setShortBreak(true);
    }
  }, [active, time]);

  useEffect(() => {
    if (shortBreak && timeShortBreak > 0) {
      setTimeout(() => {
        setTimeShortBreak(timeShortBreak - 1);
      }, 1000); // A cada 1 segundo, sera retirado -1 da varialvel time.
    } else if (timeShortBreak === 0) {
      setTime(25 * 60);
      setTimeShortBreak(5 * 60);
      setActive(false);
      setShortBreak(false);
    }
  }, [shortBreak, timeShortBreak]);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  Modal.setAppElement("#root");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const {
    buttonClose,
    mainModal,
    heading,
    heading2,
    formStyle,
    formSelectStyle,
    footerModal,
    footerModalButton,
  } = useModalStyles();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "400px",
      height: "600px",
      borderRadius: "10px",
      border: "10px solid #25d474",
      background: "#fcfcfc",
      overflow: 'auto',
    },
  };

  return (
    <main className="container">
      <div>
        <header>
          <h1>Pomodoro</h1>
          <nav>
            {shortBreak === false ? (
              <ul>
                <li>
                  <a id="activeMenu" href="">
                    Pomodoro
                  </a>
                </li>
                <li>
                  <a href="">Short break</a>
                </li>
                <li>
                  <a id="long-break" href="">
                    Long break
                  </a>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <a href="">Pomodoro</a>
                </li>
                <li>
                  <a id="activeMenuShortBreak" href="">
                    Short break
                  </a>
                </li>
                <li>
                  <a href="">Long break</a>
                </li>
              </ul>
            )}
          </nav>
        </header>

        {shortBreak === false ? (
          <section className="counter">
            <div className="number-counter">
              <strong>{minuteLeft}</strong>
              <strong>{minuteRight}</strong>

              <strong>:</strong>

              <strong>{secondLeft}</strong>
              <strong>{secondRight}</strong>
            </div>
            {active === false ? (
              <span onClick={startCountdown}>
                <BsPlayFill />
              </span>
            ) : (
              <span onClick={pauseCountdown}>
                <BsFillPauseFill />
              </span>
            )}
          </section>
        ) : (
          <section className="counterShortBreak">
            <div className="number-counter">
              <strong>{minuteShortBreakLeft}</strong>
              <strong>{minuteShortBreakRight}</strong>

              <strong>:</strong>

              <strong>{secondShortBreakLeft}</strong>
              <strong>{secondShortBreakRight}</strong>
            </div>
            {active === true ? (
              <span onClick={pauseCountdown}>
                <BsFillPauseFill />
              </span>
            ) : (
              <span onClick={startCountdown}>
                <BsPlayFill />
              </span>
            )}
          </section>
        )}

        <footer>
          <span>
            <FcDataConfiguration onClick={openModal} />
          </span>
          <div id="MyModal" className="invisible">
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Modal -> config"
              style={customStyles}
            >
              <header>
                <button onClick={closeModal} style={buttonClose}>
                  <AiFillCloseCircle />
                </button>
              </header>

              <main style={mainModal}>
                <h2 style={heading2}>Configuração</h2>

                <form style={formStyle}>
                  <div>
                    <h3 style={heading}>Minutos de trabalho</h3>    
                      <select style={formSelectStyle}>
                        <option value="">30</option>
                        <option value="">25</option>
                        <option value="">20</option>
                        <option value="">15</option>
                      </select>
                  </div>
                  <div>
                    <h3 style={heading}>Minutos de intervalo (Short break)</h3>
                      <select style={formSelectStyle}>
                        <option value="">15</option>
                        <option value="">10</option>
                        <option value="">5</option>
                        <option value="">3</option>
                      </select>
                  </div>
                  {/* <div>
                    <h3 style={heading}>Tema dark/light</h3>
                      <Switch />
                  </div> */}

                  <footer className="footer-modal" style={footerModal}>
                    <button type="submit" style={footerModalButton}>Salvar</button>
                  </footer>
                </form>
              </main>
            </Modal>
          </div>
        </footer>
      </div>
    </main>
  );
}
