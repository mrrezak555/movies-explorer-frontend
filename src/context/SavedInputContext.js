import { createContext, useState } from "react";

export const SavedInputContext = createContext(null);

export const SavedInputProvider = ({ children }) => {
  const initialState = { input: '', radio: false };
  const [value, setValue] = useState(initialState);

  const handleInput = (e) => {
    setValue({ ...value, input: e.target.value })
  }
  const handleRadio = () => {
    setValue({ ...value, radio: !value.radio })
  }
  const updateValue = () => {
    const local = JSON.parse(localStorage.getItem('value'));
    setValue({ ...local });
  }

  return (
    <SavedInputContext.Provider
      value={{
        handleInput,
        handleRadio,
        setValue,
        value,
        updateValue,
      }}
    >
      {children}
    </SavedInputContext.Provider>
  );
};