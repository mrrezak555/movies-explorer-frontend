import { NavLink } from 'react-router-dom';
import React from "react";
import './Login.css';
import logo from '../../images/logo.svg'


function Login(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        setEmail('')
        setPassword('')
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onRegisterUser({
            "password": password,
            "email": email
        });
    }

    return (
        <>
            <div className='form-container'>
                <div className="form-in">
                    <img className="form-in__logo" alt='Лого' src={logo} />
                    <h1 className="form-in__title">Рады видеть!</h1>
                    <form className="form-in__form" onSubmit={handleSubmit}>
                        <section className="form-in__section">
                            <p className='form-in__input-name'>E-mail</p>
                            <input type="text" className="form-in__input" id="email_sign-in" name="email_sign-in" required minLength="2" maxLength="40" onChange={handleChangeEmail} value={email || ''} />
                            <span className="form-in__input-error"></span>
                        </section>
                        <section className="form-in__section">
                            <p className='form-in__input-name'>Пароль</p>
                            <input type="password" className="form-in__input" id="password_sign-in" name="password_sign-in" required minLength="2" maxLength="200" onChange={handleChangePassword} value={password || ''} />
                            <span className="form-in__input-error"></span>
                        </section>
                        <button type="submit" className="form-in__submit">Войти</button>
                    </form>
                    <div className='form-in__link-container'>
                        <p className='form-in__link-text'>Ещё не зарегистрированы?</p>
                        <NavLink to="/signup" className="form-in__link">Регистрация</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;