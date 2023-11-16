import { createContext, useState } from "react";

export const InputContext = createContext(null);

export const InputProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem('value')) || { input: '', radio: false };
  const [value, setValue] = useState(initialState);

  const handleInput = (e) => {
    const updatedValue = { ...value, input: e.target.value };
    setValue(updatedValue);
    localStorage.setItem('value', JSON.stringify(updatedValue));
  }

  const handleRadio = () => {
    const updatedValue = { ...value, radio: !value.radio };
    setValue(updatedValue);
    localStorage.setItem('value', JSON.stringify(updatedValue));
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
