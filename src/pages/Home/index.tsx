import React from "react"

import { FcDataConfiguration } from 'react-icons/fc';
import { BsPlayFill } from 'react-icons/bs';

import './style.scss';
import { useState } from "react";
import { useEffect } from "react";

export function Home() {
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
            <strong>2</strong>
            <strong>5</strong>

            <strong>:</strong>

            <strong>0</strong>
            <strong>0</strong>

          </div>
          <span><BsPlayFill /></span>
        </section>

        <footer>
          <span><FcDataConfiguration /></span>
        </footer>
      </div>
    </main>
  )
} 