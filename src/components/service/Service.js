import React from "react";
import "./Service.css";
import Icon1 from "../../image/icon/Icon-1.png";
import Icon2 from "../../image/icon/Icon-2.png";
import Icon3 from "../../image/icon/Icon-3.png";
import Icon4 from "../../image/icon/Icon-4.png";
// import { CartData } from "./Data";

const Service = () => {
  return (
    <div>
      <div className="service">
        <div className="service-title">
          <h4>О сервисе</h4>
          <h3>Основные преимущества сервиса</h3>
          <p>Справа перечисленны основные преимущества сервиса E-invoice</p>
        </div>
        <div className="service-comfort">
          {/* {CartData.map((item, index) => {
            item.cartdatas.map((it) => {
              console.log(it.title);
              return (
                <div className="service-title">
                  <h4>{it.title}</h4>
                  <h3>{it.info}</h3>
                  <p>
                    Справа перечисленны основные преимущества сервиса E-invoice
                  </p>
                </div>
              );
            });
          })} */}
          <div className="service-comfort">
            <div className="cart-item cart-item--margin">
              <img src={Icon1} alt="" />
              <h4>Удобность</h4>
              <p>Сервис Удобный и Комфортный для пользования</p>
            </div>
            <div className="cart-item">
              <img src={Icon2} alt="" />
              <h4>Скорость работы</h4>
              <p>Ваши документ будут обработаны в кратчайшие сроки</p>
            </div>

            <div className="cart-item">
              <img src={Icon3} alt="" />
              <h4>Безопасноть</h4>
              <p>Ваши данные будут Конфиденциальны и доступны только вам</p>
            </div>
            <div className="cart-item cart-item--marginb">
              <img src={Icon4} alt="" />
              <h4>Обратная связь</h4>
              <p>Служба поддержки готова ответить в любой момент</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
