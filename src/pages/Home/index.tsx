import React, { useState, useEffect } from "react"

import { FcDataConfiguration } from 'react-icons/fc';
import { BsPlayFill } from 'react-icons/bs';

import './style.scss';

export function Home() {

/**
 * 25 * 60 = 1.500 segundo --- 25 minutos em segundos
 * 
 * 1.500 / 60 --- converter de segundos para minutos
 * 
 * 1.500 % 60 --- o resto da divisão dos minutos
 * 
 */

  const [time, setTime] = useState(1 * 60); // 25 Minutos, em segundos.
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const [shortBreak, setShortBreak] = useState('');
  
  function startCountdown() {
    setActive(true);
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      },  1000); // A cada 1 segundo, sera retirado -1 da varialvel time.
    } else if (time === 0) {
      setTime(25 * 60);
      setActive(false);
    } 
  }, [active, time])

  return (
    <main className="container">
      <div>
        <header>
          <h1>Pomodoro</h1>
          <nav>
            <ul>
              <li><a id="active" href="">Pomodoro</a></li>
              <li><a href="">Short break</a></li>
              <li><a href="">Long break</a></li>
            </ul>
          </nav>
        </header>

        <section className="counter">
          <div className="number-counter">
            <strong>{minuteLeft}</strong>
            <strong>{minuteRight}</strong>

            <strong>:</strong>

            <strong>{secondLeft}</strong>
            <strong>{secondRight}</strong>

          </div>
          <span onClick={startCountdown}><BsPlayFill /></span>
        </section>

        <footer>
          <span><FcDataConfiguration /></span>
        </footer>
      </div>
    </main>
  )
} 