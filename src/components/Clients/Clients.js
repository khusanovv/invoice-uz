import React from "react";
import "./Clients.css";
import Logo1 from "../../image/logo/logo-1.png";
import Logo2 from "../../image/logo/logo-2.png";
import Logo3 from "../../image/logo/logo-3.png";
import Logo4 from "../../image/logo/logo-4.png";

const Clients = () => {
  return (
    <div>
      <div className="clients">
        <div className="client-title">
          <h4>Клиенты</h4>
          <h3>Наши Основные клиенты</h3>
        </div>
        <ul className="client-logo">
          <li className="logo-item">
            <img src={Logo1} alt="" />
          </li>
          <li className="logo-item">
            <img src={Logo2} alt="" />
          </li>
          <li className="logo-item logo-item--width">
            <img src={Logo3} alt="" />
          </li>
          <li className="logo-item">
            <img src={Logo4} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Clients;
