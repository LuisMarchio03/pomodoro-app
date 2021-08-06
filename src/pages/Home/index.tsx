import React, { useEffect } from "react";
import { useTimer } from "../../hooks/useTimer";

import { FcDataConfiguration } from "react-icons/fc";
import { BsPlayFill } from "react-icons/bs";

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
                  <a href="">Long break</a>
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
            <span onClick={startCountdown}>
              <BsPlayFill />
            </span>
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
            <span onClick={startCountdown}>
              <BsPlayFill />
            </span>
          </section>
        )}

        <footer>
          <span>
            <FcDataConfiguration />
          </span>
        </footer>
      </div>
    </main>
  );
}
