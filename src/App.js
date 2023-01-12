import "./App.css";
import Header from "./components/header/Header";
import Instruction from "./components/instruction/Instruction";
import Intro from "./components/intro/Intro";
import Service from "./components/service/Service";
import { useState, useEffect } from "react";

import { Dna } from "react-loader-spinner";
import TariffPlans from "./components/tariffPlans/TariffPlans";
import Clients from "./components/Clients/Clients";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    // window.onload = function () {
    //   setLoading(false);
    // };
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loading">
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <>
          <Header />
          <Intro />
          <Service />
          <Instruction />
          <TariffPlans />
          <Clients />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
