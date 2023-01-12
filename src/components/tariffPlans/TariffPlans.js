import React from "react";
import "./TariffPlans.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

const TariffPlans = () => {
  return (
    <div>
      <div className="tariff-plans">
        <div className="plan-info">
          <h4>Тарифные планы</h4>
          <h3>Какие у нас тарифные планы?</h3>
          <p>Цена на отправку одного документа</p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={14}
          slidesPerGroup={3}
          className="swiper"
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide className="plan-slide">
            <h4>Бизнес 500</h4>
            <h4>345 сум</h4>
            <p>
              Тариф для пользователей отправляющих от 500 (пятисот) до 1000
              документов в месяц
            </p>
            <button className="plan-btn">Оформить</button>
          </SwiperSlide>
          <SwiperSlide className="plan-slide slide-active">
            <h4>Старт</h4>
            <h4>500 сум</h4>
            <p>
              Тариф для пользователей отправляющих от 500 (пятисот) до 1000
              документов в месяц
            </p>
            <button className="plan-btn btn-active">Оформить</button>
          </SwiperSlide>
          <SwiperSlide className="plan-slide">
            <h4>Бизнес 500</h4>
            <h3>345 сум</h3>
            <p>
              Тариф для пользователей отправляющих от 500 (пятисот) до 1000
              документов в месяц
            </p>
            <button className="plan-btn">Оформить</button>
          </SwiperSlide>
          <SwiperSlide className="plan-slide ">
            <h4>Бизнес 500</h4>
            <h4>345 сум</h4>
            <p>
              Тариф для пользователей отправляющих от 500 (пятисот) до 1000
              документов в месяц
            </p>
            <button className="plan-btn ">Оформить</button>
          </SwiperSlide>
          <SwiperSlide className="plan-slide slide-active">
            <h4>Бизнес 500</h4>
            <h4>345 сум</h4>
            <p>
              Тариф для пользователей отправляющих от 500 (пятисот) до 1000
              документов в месяц
            </p>
            <button className="plan-btn btn-active">Оформить</button>
          </SwiperSlide>
          <SwiperSlide className="plan-slide ">
            <h4>Бизнес 500</h4>
            <h4>345 сум</h4>
            <p>
              Тариф для пользователей отправляющих от 500 (пятисот) до 1000
              документов в месяц
            </p>
            <button className="plan-btn">Оформить</button>
          </SwiperSlide>
          <SwiperSlide className="plan-slide">
            {" "}
            <h4>Бизнес 500</h4>
            <h4>345 сум</h4>
            <p>
              Тариф для пользователей отправляющих от 500 (пятисот) до 1000
              документов в месяц
            </p>
            <button className="plan-btn">Оформить</button>
          </SwiperSlide>
          <SwiperSlide className="plan-slide slide-active">
            {" "}
            <h4>Бизнес 500</h4>
            <h4>345 сум</h4>
            <p>
              Тариф для пользователей отправляющих от 500 (пятисот) до 1000
              документов в месяц
            </p>
            <button className="plan-btn btn-active">Оформить</button>
          </SwiperSlide>
          <SwiperSlide className="plan-slide ">
            {" "}
            <h4>Бизнес 500</h4>
            <h4>345 сум</h4>
            <p>
              Тариф для пользователей отправляющих от 500 (пятисот) до 1000
              документов в месяц
            </p>
            <button className="plan-btn ">Оформить</button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TariffPlans;
