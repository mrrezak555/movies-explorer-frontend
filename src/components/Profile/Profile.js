import React, { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from "../../context/CurrentUserContext";
import useValidation from "../../hooks/useValidation";
import { mainApi } from "../../utils/MainApi";
import Navigation from "../Navigation/Navigation";
import "./Profile.css";
import { InfoToolTipContext } from "../../context/InfoToolTipProvider";
import InfoToolTip from "../InfoToolTip/InfoToolTip";

function Profile() {
    const { setLoggedOut, user, setUser } = useContext(CurrentUserContext);
    const [isEditActive, setIsEditActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const {
        values,
        handleChange,
        errors,
        setValues,
        isValid
    } = useValidation();
    const [isDateNew, setIsDateNew] = useState(false);
    const {
        setToolTipMessage,
        openInfoToolTip,
        setToolTipTitle,
        setIsOk
    } = useContext(InfoToolTipContext);

    const handlerChange = e => {
        handleChange(e);
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (isEditActive) {
            setIsLoading(true);
            setIsDisabled(true);
            if (values.email === user.email && values.name === user.name) {
                setIsDateNew(false);
                setIsLoading(false);
                setIsDisabled(false);
                return;
            }
            mainApi
                .patchUserInfo(values)
                .then(res => {
                    setUser(res);
                    setToolTipTitle("Success");
                    setToolTipMessage("Данные профиля успешны изменены");
                    setIsOk(true);
                    openInfoToolTip();
                    setValues({});
                })
                .catch(err => {
                    if (err === "Ошибка 409") {
                        setToolTipTitle("Произошла ошибка");
                        setToolTipMessage("Данная почта уже используется");
                        setIsOk(false);
                        openInfoToolTip();
                    } else {
                        setToolTipTitle("Произошла ошибка");
                        setToolTipMessage("Попробуйте позже");
                        setIsOk(false);
                        openInfoToolTip();
                    }
                })
                .finally(() => {
                    setIsDisabled(false);
                    setIsLoading(false);
                    setIsEditActive(false);
                });
        } else {
            setValues({ name: user.name, email: user.email });
            setIsEditActive(true);
            setIsDisabled(false);
        }
    };
    const navigate = useNavigate();

    const handleLogout = e => {
        e.preventDefault();
        setIsLoading(true);
        mainApi
            .signout()
            .then(() => {
                setLoggedOut();
            })
            .catch(err => {
                if (
                    err.message ===
                    "Unexpected token 'В', \"Выход выпо\"... is not valid JSON"
                ) {
                    navigate("/", { replace: true });
                    setLoggedOut();
                }
                setToolTipTitle("Произошла ошибка");
                setToolTipMessage("Попробуйте позже");
                openInfoToolTip();
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const button = (
        <button
            type="submit"
            disabled={!isValid || (values.email === user.email && values.name === user.name) || isDateNew}
            className={isEditActive ? "form-in-profile__submit" : "form-in-profile__submit"}
        >
            {isEditActive ? "Сохранить" : "Редактировать"}
        </button>
    );
    return (
        <main>
            <div className="form-profile-wrapper">
                <InfoToolTip />
                <Navigation />
            </div>
            <div className='form-profile-container'>
                <div className="form-in-profile">
                    <h1 className="form-in-profile__title">Привет, {user.name}!</h1>
                    <form className="form-in-profile__form" onSubmit={handleSubmit}>
                        <section className="form-in-profile__section">
                            <p className='form-in-profile__input-name'>{isEditActive ? "Имя" : user.name}</p>
                            {isEditActive ? (
                                <>
                                    <input
                                        type="text"
                                        className="form-in-profile__input"
                                        name="name"
                                        required
                                        minLength="2"
                                        maxLength="30"
                                        onChange={handlerChange}
                                        value={values.name || ''}
                                    />
                                </>
                            ) : (
                                <p className='form-in-profile__input-name'>{user.name}</p>
                            )}
                        </section>
                        {errors.name && <span className="form-in__input-error">{errors.name}</span>}
                        {errors.email && <span className="form-in__input-error">{errors.email}</span>}
                        <section className="form-in-profile__section">
                            <p className='form-in-profile__input-name'>{isEditActive ? "E-mail" : user.email}</p>
                            {isEditActive ? (
                                <>
                                    <input
                                        type="text"
                                        className="form-in-profile__input"
                                        name="email"
                                        pattern="^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$"
                                        required
                                        minLength="2"
                                        maxLength="40"
                                        onChange={handlerChange}
                                        value={values.email || ''}
                                    />
                                </>
                            ) : (
                                <p className='form-in-profile__input-name'>{user.email}</p>
                            )}
                        </section>
                        {button}
                    </form>
                    <Link to={'/'}>
                        <button type="button" className="form-in-profile__exit-button" onClick={e => (handleLogout(e))}>
                            Выйти из аккаунта
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Profile;