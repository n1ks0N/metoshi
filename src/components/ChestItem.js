import React from "react";
import { Button } from "../stories/Button.jsx";
import chestImage from "../utils/images/1.png";
import "./ChestItem.css";

const ChestItem = ({
  img,
  title,
  description,
  quantity,
  cost,
  amount,
  setPopup,
}) => {
  const showPopup = () => {
    setPopup(true);
  };
  return (
    <div className="token_item">
      <div className="token_item_image">
        <img src={img || chestImage} />
      </div>
      <div className="token_item_name">{title} chest</div>
      <div className="token_item_desc">{description}</div>
      <div className="token-quantity">{quantity || 0}</div>
      <div className="token_item_buy">
        {/* <div className="button show_popup" onClick={showPopup}>{cost || '30.000'} $METO</div> */}
        <Button
          text={`${cost || 30.0} $METO`}
          popup={true}
          onClick={showPopup}
        />
        <p className="token_item_amount">Available: {amount || "-"}</p>
      </div>
    </div>
  );
};

export default ChestItem;
