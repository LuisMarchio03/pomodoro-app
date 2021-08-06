import React, { useState } from "react";

export function useTimer() {
  /**
   * 25 * 60 = 1.500 segundo --- 25 minutos em segundos
   *
   * 1.500 / 60 --- converter de segundos para minutos
   *
   * 1.500 % 60 --- o resto da divisão dos minutos
   *
   */

  const [time, setTime] = useState(25 * 60); // 25 Minutos, em segundos.
  const [timeShortBreak, setTimeShortBreak] = useState(5 * 60); // 5 Minutos, em segundos.

  const [active, setActive] = useState(false);
  const [shortBreak, setShortBreak] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  //ShortBreak
  const minutesShortBreak = Math.floor(timeShortBreak / 60);
  const secondsShortBreak = timeShortBreak % 60;

  const [minuteShortBreakLeft, minuteShortBreakRight] = String(
    minutesShortBreak
  )
    .padStart(2, "0")
    .split("");
  const [secondShortBreakLeft, secondShortBreakRight] = String(
    secondsShortBreak
  )
    .padStart(2, "0")
    .split("");

  function startCountdown() {
    setActive(true);
  }

  function pauseCountdown() {
    setActive(false);
    setTime(time);
  }

  return {
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
    pauseCountdown
  };
}
