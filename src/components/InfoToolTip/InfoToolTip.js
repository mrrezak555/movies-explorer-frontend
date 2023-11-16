import React, { useContext } from "react";
import { InfoToolTipContext } from "../../context/InfoToolTipProvider";
import { useClosePopup } from "../../hooks/useClosePopup";
import DeleteButton from "../Ui/DeleteButton";
import "./InfoToolTip.css";


const InfoToolTip = () => {
  const {
    toolTipMessage,
    isInfoToolTipOpen,
    closeInfoToolTip,
    toolTipTitle,
  } = useContext(InfoToolTipContext);
  useClosePopup(isInfoToolTipOpen, closeInfoToolTip);
  const InfoToolTipClass = isInfoToolTipOpen ? "popup popup_opened" : "popup";
  return (
    <div className={InfoToolTipClass}>
      <DeleteButton onClick={closeInfoToolTip} />
      <div className={"popup__container"}>
        <h3 className={"popup__title"}>{toolTipTitle}</h3>
        <p className={"popup__txt"}>{toolTipMessage}</p>
      </div>
    </div>
  );
};

export default InfoToolTip;
