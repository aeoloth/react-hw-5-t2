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

  // if (value === 1) {
  //   return (
  //     <div className="season">
  //       <img className="season__img" src="/img/winter.jpg" alt="winter" />
  //       <div className="season__name">Зима</div>
  //     </div>
  //   );
  // } else if (value === 2) {
  //   return (
  //     <div className="season">
  //       <img className="season__img" src="/img/spring.jpg" alt="spring" />
  //       <div className="season__name">Весна</div>
  //     </div>
  //     );
  // } else if (value === 3) {
  //   return (
  //     <div className="season">
  //       <img className="season__img" src="/img/summer.jpg" alt="summer" />
  //       <div className="season__name">Лето</div>
  //     </div>
  //     );
  // } else {
  //   return (
  //     <div className="season">
  //       <img className="season__img" src="/img/autumn.jpg" alt="autumn" />
  //       <div className="season__name">Осень</div>
  //     </div>
  //     );
  // };

  // switch (value) {
  //   case 1:
  //     return (
  //       <div className="season">
  //         <img className="season__img" src="/img/winter.jpg" alt="winter" />
  //         <div className="season__name">Зима</div>
  //       </div>
  //     );
  //   case 2:
  //     return (
  //       <div className="season">
  //         <img className="season__img" src="/img/spring.jpg" alt="spring" />
  //         <div className="season__name">Весна</div>
  //       </div>
  //     );
  //   case 3:
  //     return (
  //       <div className="season">
  //         <img className="season__img" src="/img/summer.jpg" alt="summer" />
  //         <div className="season__name">Лето</div>
  //       </div>
  //     );
  //   default:
  //     return (
  //       <div className="season">
  //         <img className="season__img" src="/img/autumn.jpg" alt="autumn" />
  //         <div className="season__name">Осень</div>
  //       </div>
  //     );
  // }

  // return value === 1 ? (
  //   <div className="season">
  //     <img className="season__img" src="/img/winter.jpg" alt="winter" />
  //     <div className="season__name">Зима</div>
  //   </div>
  // ) : value === 2 ? (
  //   <div className="season">
  //     <img className="season__img" src="/img/spring.jpg" alt="spring" />
  //     <div className="season__name">Весна</div>
  //   </div>
  // ) : value === 3 ? (
  //   <div className="season">
  //     <img className="season__img" src="/img/summer.jpg" alt="summer" />
  //     <div className="season__name">Лето</div>
  //   </div>
  // ) : (
  //   <div className="season">
  //     <img className="season__img" src="/img/autumn.jpg" alt="autumn" />
  //     <div className="season__name">Осень</div>
  //   </div>
  // );

  // return (
  //   <div className="season">
  //   {value === 1 ? (
  //     <>
  //     <img className="season__img" src="/img/winter.jpg" alt="winter" />
  //     <div className="season__name">Зима</div>
  //     </>
  // ) : value === 2 ? (
  //   <>
  //     <img className="season__img" src="/img/spring.jpg" alt="spring" />
  //     <div className="season__name">Весна</div>
  //   </>
  // ) : value === 3 ? (
  //   <>
  //     <img className="season__img" src="/img/summer.jpg" alt="summer" />
  //     <div className="season__name">Лето</div>
  //   </>
  // ) : (
  //   <>
  //     <img className="season__img" src="/img/autumn.jpg" alt="autumn" />
  //     <div className="season__name">Осень</div>
  //   </>
  // )}
  // </div>
  // )

  // return (
  //   <div className="season">
  //     <img className="season__img" src={
  //         value === 1 ? "/img/winter.jpg" :
  //         value === 2 ? "/img/spring.jpg" :
  //         value === 3 ? "/img/summer.jpg" :
  //         "/img/autumn.jpg"
  //      } alt="winter" />
  //     <div className="season__name">{
  //         value === 1 ? "Зима" :
  //         value === 2 ? "Весна" :
  //         value === 3 ? "Лето" :
  //         "Осень"
  //     }</div>
  // </div>
  // )

  return (
    <div className="season">
      {value === 1 && (
        <>
          <img className="season__img" src="/img/winter.jpg" alt="winter" />
          <div className="season__name">Зима</div>
        </>
      )}
      {value === 2 && (
        <>
          <img className="season__img" src="/img/spring.jpg" alt="spring" />
          <div className="season__name">Весна</div>
        </>
      )}
      {value === 3 && (
        <>
          <img className="season__img" src="/img/summer.jpg" alt="summer" />
          <div className="season__name">Лето</div>
        </>
      )}
      {value === 4 && (
        <>
          <img className="season__img" src="/img/autumn.jpg" alt="autumn" />
          <div className="season__name">Осень</div>
        </>
      )}
    </div>
  );
};

Season.propTypes = {
  value: PropTypes.number.isRequired,
};

ReactDOM.render(<Season value={1} />, document.getElementById("root"));
