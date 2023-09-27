import "./Profile.css"
import { Link, NavLink } from 'react-router-dom';
import React from "react";
import Navigation from "../Navigation/Navigation";

function Profile(props) {
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
        <main>
            <div className="form-profile-wrapper">
                <Navigation />
            </div>
            <div className='form-profile-container'>
                <div className="form-in-profile">
                    <h1 className="form-in-profile__title">Привет, Виталий!</h1>
                    <form className="form-in-profile__form" onSubmit={handleSubmit}>
                        <section className="form-in-profile__section">
                            <p className='form-in-profile__input-name'>Имя</p>
                            <input
                                type="text"
                                className="form-in-profile__input"
                                id="email_sign-in"
                                name="email_sign-in"
                                placeholder="Виталий"
                                required minLength="2"
                                maxLength="40"
                                onChange={handleChangeEmail}
                                value={email || ''}
                            />
                        </section>
                        <section className="form-in-profile__section">
                            <p className='form-in-profile__input-name'>E-mail</p>
                            <input
                                type="password"
                                className="form-in-profile__input"
                                id="password_sign-in"
                                name="password_sign-in"
                                placeholder="pochta@yandex.ru"
                                required minLength="2"
                                maxLength="200"
                                onChange={handleChangePassword}
                                value={password || ''}
                            />
                            <span className="form-in-profile__input-error"></span>
                        </section>
                        <button type="submit" className="form-in-profile__submit">Редактировать</button>
                    </form>
                    <Link to={'/'}>
                        <button type="button" className="form-in-profile__exit-button">Выйти из аккаунта</button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Profile;