import React, { useState } from "react";

export const InfoToolTipContext = React.createContext(true);

export const InfoToolTipProvider = ({ children }) => {
  const [isInfoToolTipOpen, setIsInfoToolTipOpen] = useState(false);
  const [toolTipTitle, setToolTipTitle] = useState("Произошла ошибка");
  const [toolTipMessage, setToolTipMessage] = useState("Попробуйте позже");
  const [isOk, setIsOk] = useState(true);

  const openInfoToolTip = () => {
    setIsInfoToolTipOpen(true);
  };
  const closeInfoToolTip = () => {
    setIsInfoToolTipOpen(false);
  };
  return (
    <InfoToolTipContext.Provider
      value={{
        toolTipMessage,
        setToolTipMessage,
        isInfoToolTipOpen,
        openInfoToolTip,
        closeInfoToolTip,
        toolTipTitle,
        setToolTipTitle,
        setIsOk,
        isOk
      }}
    >
      {children}
    </InfoToolTipContext.Provider>
  );
};
