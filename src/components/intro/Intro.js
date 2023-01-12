import React from "react";
import "./Intro.css";
import IntroImg from "../../image/Intro.png";

const Intro = () => {
  return (
    <div>
      <div className="intro">
        <div className="intro-title">
          <h2>
            E-invoce-Интерактивная платформа для обеспечения электронного
            документооборота и обработки данных
          </h2>
          <button className="intro-btn">Узнать подробнее</button>
        </div>
        <div className="intro-img">
          <img src={IntroImg} alt="Intro image" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
