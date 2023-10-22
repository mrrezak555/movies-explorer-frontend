import { createContext, useState } from "react";

export const InputContext = createContext(null);

export const InputProvider = ({ children }) => {
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

  const handleSetLocalStorage = () => {
    localStorage.setItem('value', JSON.stringify(value))
  }

  return (
    <InputContext.Provider
      value={{
        handleInput,
        handleRadio,
        setValue,
        value,
        updateValue,
        handleSetLocalStorage
      }}
    >
      {children}
    </InputContext.Provider>
  );
};
