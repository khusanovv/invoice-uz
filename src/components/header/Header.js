import React, { useState } from "react";
import Logo from "../../image/Logo.png";
import { AiOutlineBars } from "react-icons/ai";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {isOpen ? (
        <div className="header-menu">
          <ul className="link">
            <li className="link-item">Главная</li>
            <li className="link-item">Информация</li>
            <li className="link-item">Контакты</li>
            <li className="link-item">Тарифы</li>
            <li className="link-item">Клиенты</li>
            <button className="menu-btn">Авторизоваться</button>
          </ul>
          <button
            onClick={() => {
              setIsOpen(false);
            }}
            className="close-btn"
          >
            X
          </button>
        </div>
      ) : null}

      <div className="header">
        <div className="header-logo">
          <img src={Logo} alt="" />
        </div>
        <div className="header-nav">
          <ul className="nav-link">
            <li className="link-item">Главная</li>
            <li className="link-item">Информация</li>
            <li className="link-item">Контакты</li>
            <li className="link-item">Тарифы</li>
            <li className="link-item">Клиенты</li>
          </ul>
          <button className="nav-btn">Авторизоваться</button>
          <button onClick={() => setIsOpen(!isOpen)} className="open-menu">
            {isOpen ? "" : <AiOutlineBars />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
