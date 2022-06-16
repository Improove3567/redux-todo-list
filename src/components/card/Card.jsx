import React from "react";
import css from "./Card.module.css";

const Card = () => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>asdasd</h3>
      <div className={css.img_container}>
        <img
          src="https://cdn-icons.flaticon.com/png/512/3405/premium/3405244.png?token=exp=1655369445~hmac=dab07b149c1d0f502710d3385c1dca7b"
          className={css.img_basket}
        />
        <img
          src="https://cdn-icons.flaticon.com/png/512/2985/premium/2985068.png?token=exp=1655369430~hmac=2c486b7d7a31175d2115bc0e58add34e"
          className={css.img_edit}
        />
      </div>
    </div>
  );
};

export default Card;
