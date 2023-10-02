import { Link, NavLink } from 'react-router-dom';
import React from "react";
import './Register.css';
import logo from '../../images/logo.svg'


function Register(props) {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');


    function handleChangeEmail(e) {
        setEmail(e.target.value);
    }

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangePassword(e) {
        setPassword(e.target.value)
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        setEmail('')
        setPassword('')
        setName('')
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onRegisterUser({
            "password": password,
            "email": email,
            "name": name,
        });
    }

    return (
        <main>
            <div className='form-container'>
                <div className="form-in">
                    <Link to={'/'}>
                        <img className="form-in__logo" alt='Лого' src={logo} />
                    </Link>
                    <h1 className="form-in__title">Добро пожаловать!</h1>
                    <form className="form-in__form" onSubmit={handleSubmit}>
                        <div className="form-in__section">
                            <label className='form-in__input-name'>Имя</label>
                            <input
                                type="text"
                                className="form-in__input"
                                id="email_sign-in"
                                name="email_sign-in"
                                placeholder='Виталий'
                                required minLength="2"
                                maxLength="40"
                                onChange={handleChangeName}
                                value={name || ''}
                            />
                            <span className="form-in__input-error"></span>
                        </div>
                        <div className="form-in__section">
                            <label className='form-in__input-name'>E-mail</label>
                            <input
                                type="text"
                                className="form-in__input"
                                id="email_sign-in"
                                name="email_sign-in"
                                placeholder='NewPochta@yandex.ru'
                                required minLength="2"
                                maxLength="40"
                                onChange={handleChangeEmail}
                                value={email || ''}
                            />
                            <span className="form-in__input-error"></span>
                        </div>
                        <div className="form-in__section">
                            <label className='form-in__input-name'>Пароль</label>
                            <input
                                type="password"
                                className="form-in__input"
                                id="password_sign-in"
                                name="password_sign-in"
                                placeholder='Password'
                                required minLength="2"
                                maxLength="200"
                                onChange={handleChangePassword}
                                value={password || ''} />
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