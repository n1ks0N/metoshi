import React, { useState } from "react";
import plusIcon from "../utils/images/icon_plus.svg";
import minusIcon from "../utils/images/icon_minus.svg";

const AccordeonItem = ({ title, text }) => {
  const [state, setState] = useState(false);
  return (
    <div className="item" onClick={() => setState((prev) => !prev)}>
      <p className={`ttl ${state ? "active" : ""}`}>
        <img
          src={state ? minusIcon : plusIcon}
          style={{ marginRight: "20px" }}
        />
        {title || "Who is Metoshi?"}
      </p>
      <div
        className="item_in"
        style={{ display: state ? "block" : "none" }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default AccordeonItem;
