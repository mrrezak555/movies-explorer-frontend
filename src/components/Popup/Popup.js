import React, { useContext } from "react";
import './Popup.css';
import { Link, useLocation } from "react-router-dom";
import { useClosePopup } from "../../hooks/useClosePopup";
import { PopupContext } from "../../context/PopupProvider";
import closeButton from '../../images/CloseButton.svg'
import Account from '../../images/Account.svg';


const Popup = () => {
  const { isPopupOpen, closePopup } = useContext(PopupContext);
  useClosePopup(isPopupOpen, closePopup);

  const popupClass = isPopupOpen ? "popup popup_opened" : "popup";
  const location = useLocation();
  const currentPath = location.pathname;

  const isNavLinkActive = path => {
    return currentPath === path
      ? "modal-menu__link modal-menu__link_active"
      : "modal-menu__link";
  };

  return (
    <div className={popupClass}>
      <img className='popup__close-button' src={closeButton} alt="Закрыть" onClick={closePopup} />
      <div className='modal-menu'>
        <nav className='modal-nav-bar'>
          <ul className='modal-nav-bar__list'>
            <li className='modal-menu__item'>
              <Link to={"/"} className={isNavLinkActive("/")}>
                Главная
              </Link>
            </li>
            <li className='modal-menu__item'>
              <Link to={"/movies"} className={isNavLinkActive("/movies")}>
                Фильмы
              </Link>
            </li>
            <li className='modal-menu__item'>
              <a
                href={"/saved-movies"}
                className={isNavLinkActive("/saved-movies")}
              >
                Сохранённые фильмы
              </a>
            </li>
          </ul>
        </nav>
        <div className='account-menu'>
          <Link to={"/profile"} className={"account-menu__name"}>
            Аккаунт
          </Link>
          <img src={Account} alt="Иконка аккаунта" style={{ color: "black" }} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
