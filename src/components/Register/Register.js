import { Link, NavLink, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react";
import './Register.css';
import logo from '../../images/logo.svg'
import { mainApi } from '../../utils/MainApi';
import useValidation from '../../hooks/useValidation';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { MoviesContext } from '../../context/MoviesContext';


function Register() {
    const navigate = useNavigate();
    const { setUser } = useContext(CurrentUserContext);
    const { setLoggedIn } = useContext(CurrentUserContext);
    // const { setToolTipMessage, openInfoToolTip, setToolTipTitle } = useContext(
    //   InfoToolTipContext
    // );
    const {
        values,
        handleChange,
        errors,
        isValid,
        resetForm
    } = useValidation();
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        resetForm();
    }, [resetForm]);
    const handleSubmit = e => {
        e.preventDefault();
        if (!isValid) {
            return;
        }
        setDisabled(true);
        mainApi
            .register(values)
            .then(data => {
                setUser(data);
                setLoggedIn(data);
                navigate("/movies", { replace: true });
            })
            .catch(err => {
                //   if (err === "Ошибка 409") {
                //     setToolTipTitle("Произошла ошибка");
                //     setToolTipMessage("Данная почта уже используется");
                //     openInfoToolTip();
                //   } else {
                //     setToolTipTitle("Произошла ошибка");
                //     setToolTipMessage("Попробуйте позже");
                //     openInfoToolTip();
                // }
            })
            .finally(() => {
                // getSortedMovies();
                setDisabled(false);
            });
    };

    return (
        <main>
            <div className='form-container'>
                <div className="form-in">
                    <Link to={'/'}>
                        <img className="form-in__logo" alt='Лого' src={logo} />
                    </Link>
                    <h1 className="form-in__title">Добро пожаловать!</h1>
                    <form className="form-in__form" onSubmit={e => { handleSubmit(e) }}>
                        <div className="form-in__section">
                            <label className='form-in__input-name'>Имя</label>
                            <input
                                type="text"
                                className="form-in__input"
                                id="name"
                                name="name"
                                placeholder='Виталий'
                                required minLength="2"
                                maxLength="40"
                                onChange={e => { handleChange(e) }}
                                value={values.name || ''}
                            />
                            <span className="form-in__input-error"></span>
                        </div>
                        <div className="form-in__section">
                            <label className='form-in__input-name'>E-mail</label>
                            <input
                                type="text"
                                className="form-in__input"
                                name="email"
                                placeholder='NewPochta@yandex.ru'
                                required minLength="2"
                                maxLength="40"
                                onChange={e => { handleChange(e) }}
                                value={values.email || ''}
                            />
                            <span className="form-in__input-error"></span>
                        </div>
                        <div className="form-in__section">
                            <label className='form-in__input-name'>Пароль</label>
                            <input
                                type="password"
                                className="form-in__input"
                                name="password"
                                placeholder='Password'
                                required minLength="2"
                                maxLength="200"
                                onChange={e => { handleChange(e) }}
                                value={values.password || ''} />
                            <span className="form-in__input-error"></span>
                        </div>
                        <button type="submit" className="form-in__submit">Зарегистрироваться</button>
                    </form>
                    <div className='form-in__link-container'>
                        <p className='form-in__link-text'>Уже зарегистрированы?</p>
                        <NavLink to="/signin" className="form-in__link">Войти</NavLink>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Register;