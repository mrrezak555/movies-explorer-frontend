import { useCallback, useState } from "react";

const useValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);
  const handleChange = e => {
    const { name, value } = e.target;
    let errorMessage = '';

    if (name === 'email') {
      if (!value) {
        errorMessage = 'Заполните это поле';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        errorMessage = 'Неверный формат почты';
      }
    }

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: errorMessage || e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    setErrors,
    isValid,
    resetForm,
    setValues,
    setIsValid
  };
};

export default useValidation;
