import React from "react";
import "./Footer.css";
import LogoNav from "../../image/Logo.png";
import MailLogo from "../../image/icon/Mail.png";
import TelegramLogo from "../../image/icon/Telegram.png";
import PhoneLogo from "../../image/icon/Phone.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-nav">
          <div className="nav-logo">
            <img className="logo" src={LogoNav} alt="" />
          </div>
          <ul className="footer-nav-link">
            <li className="link-item">На главную</li>
            <li className="link-item">О сервисе</li>
            <li className="link-item">Тарифы</li>
          </ul>
        </div>
        <div className="footer-contact">
          <div className="contact-cart__item">
            <img className="image" src={MailLogo} alt="" />
            <h3>Почта</h3>
            <p>einvoice.uz@gmail.com</p>
          </div>
          <div className="contact-cart__item">
            <img src={PhoneLogo} alt="" />
            <h3>Номер</h3>
            <p>+998 71 200 03 30</p>
          </div>
          <div className="contact-cart__item">
            <img src={TelegramLogo} alt="" />
            <h3>Телеграм</h3>
            <p>@Einvoice_bot</p>
          </div>
        </div>
        <p className="invoice-uz">© e-invoice.uz 2022 г. Все права защищены</p>
      </div>
    </div>
  );
};

export default Footer;
