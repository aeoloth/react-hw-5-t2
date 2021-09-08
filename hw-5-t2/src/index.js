import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./App.css";

const Season = ({ value }) => {
//   return (
//     <div className="season">
//       <img className="season__img" src="/img/winter.jpg" alt="" />
//       <div className="season__name">Зима</div>
//     </div>
//   );


if (value === 1) {
  return (
    <div className="season">
      <img className="season__img" src="/img/winter.jpg" alt="winter" />
      <div className="season__name">Зима</div>
    </div>
  );
} else if (value === 2) {
  return (
    <div className="season">
      <img className="season__img" src="/img/spring.jpg" alt="spring" />
      <div className="season__name">Весна</div>
    </div>
    );
} else if (value === 3) {
  return (
    <div className="season">
      <img className="season__img" src="/img/summer.jpg" alt="summer" />
      <div className="season__name">Лето</div>
    </div>
    );
} else {
  return (
    <div className="season">
      <img className="season__img" src="/img/autumn.jpg" alt="autumn" />
      <div className="season__name">Осень</div>
    </div>
    );
};




};

Season.propTypes = {
  value: PropTypes.number.isRequired,
};

ReactDOM.render(<Season value={1} />, document.getElementById("root"))
