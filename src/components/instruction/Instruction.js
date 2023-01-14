import React from "react";
import "./Instruction.css";

const Instruction = () => {
  return (
    <div>
      <div className="instruction">
        <div className="instruction-title">
          <h4>Инструкция</h4>
          <h3> Как пользоваться сервисом?</h3>
          <p>
            Инструкция по отправке документов в налоговую через сервис E-invoice
          </p>
        </div>
        <div className="instruction-cart">
          <div className="cart-items">
            <h3>
              Создайте необходимый документ{" "}
              <span className="items-number--right">1</span>
            </h3>
            <p>Войдите на сайт и создайте необходимый документ</p>
          </div>
          <div className="cart-items">
            <h3 className="cart-item--left">
              Выберите тип документа{" "}
              <span className="items-number--left">2</span>
            </h3>
            <p>Выберите необходимый тип документа в разделе выбора</p>
          </div>
          <div className="cart-items">
            <h3>
              Заполните документ <span className="items-number--right">3</span>
            </h3>
            <p>Заполните все необходимые поля вашего Документа</p>
          </div>
          <div className="cart-items">
            <h3>
              Ваш документ готов <span className="items-number--right">5</span>
            </h3>
            <p>
              Ваш документ должны обработать, после чего можете забрать готовый
              документ
            </p>
          </div>
          <div className="cart-items">
            <h3 className="cart-item--left">
              Сохраните ваш документ{" "}
              <span className="items-number--left">4</span>
            </h3>
            <p>Сохраните ваш документ Сохраните заполненный вами документ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
