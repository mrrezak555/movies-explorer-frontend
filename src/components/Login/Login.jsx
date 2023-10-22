import { Link, NavLink, useNavigate } from 'react-router-dom';
import React, { useContext, useEffect, useState } from "react";
import './Login.css';
import logo from '../../images/logo.svg'
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import useValidation from '../../hooks/useValidation';


function Login() {
    const navigate = useNavigate();
    const {
        values,
        handleChange,
        errors,
        isValid,
        resetForm
    } = useValidation();

    const { setLoggedIn, setUser } = useContext(CurrentUserContext);
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
        mainApi.login(values)
            .then(data => {
                setUser(data);
                navigate("/movies", { replace: true });
                setLoggedIn(data._id);
            })
            .catch(err => { console.log(err) })
            .finally(() => {
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
                    <h1 className="form-in__title">Рады видеть!</h1>
                    <form className="form-in__form" onSubmit={e => { handleSubmit(e) }}>
                        <div className="form-in__section">
                            <label className='form-in__input-name'>E-mail</label>
                            <input
                                disabled={disabled}
                                type="text"
                                className="form-in__input"
                                id="email"
                                name="email"
                                required minLength="2"
                                maxLength="40"
                                placeholder='pochta@yandex.ru'
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
                                id="password"
                                name="password"
                                required minLength="2"
                                maxLength="200"
                                placeholder='Password'
                                onChange={e => { handleChange(e) }}
                                value={values.password || ''}
                            />
                            <span className="form-in__input-error"></span>
                        </div>
                        <button type="submit" className="form-in__submit" disabled={disabled || !isValid}>Войти</button>
                    </form>
                    <div className='form-in__link-container'>
                        <p className='form-in__link-text'>Ещё не зарегистрированы?</p>
                        <NavLink to="/signup" className="form-in__link">Регистрация</NavLink>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Login;