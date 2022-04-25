import React from "react";
import { Button } from "../stories/Button.jsx";
import { StatText } from "../stories/StatText.jsx";
import popupCloseIcon from "../utils/images/icon_close.svg";
import redPanda from "../utils/images/redpanda3.png";

const Popup = ({ popup, setPopup }) => {
  return (
    <div className="popup" style={{ display: popup ? "block" : "none" }}>
      <div className="popup_close" onClick={() => setPopup(false)}>
        <img src={popupCloseIcon} style={{ width: "100%" }} />
      </div>
      <div className="popup_content">
        <div className="popup_content_item">
          <img src={redPanda} alt="" />
        </div>
        <div className="popup_content_desc">
          <h2>Lumberjack</h2>
          <p>
            It is used to increase the bonus at the main building. When using a
            panda in the game, the construction time of all buildings will be
            reduced by &nbsp;<span>30%-250%!</span>
          </p>
          <div className="stats">
            <StatText type="common" />
            <StatText type="unique" />
            <StatText type="rare" />
            {/* <div className="stat_item common">
              <div className="stat_item_icon"></div>
              <p>50%</p>
              <span>Common</span>
            </div> */}
            {/* <div className="stat_item unique">
              <div className="stat_item_icon"></div>
              <p>30%</p>
              <span>Unique</span>
            </div>
            <div className="stat_item rare">
              <div className="stat_item_icon"></div>
              <p>20%</p>
              <span>Rare</span>
          </div> */}
          </div>
          <Button text="Buy NFT" />
          {/* <div className="button">Buy NFT</div> */}
        </div>
      </div>
    </div>
  );
};

export default Popup;
