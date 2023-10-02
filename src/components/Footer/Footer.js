import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__bottom">
        <p className="footer__copyright footer__item">© {(new Date()).getFullYear()}</p>
        <div className="footer__links">
          <a href="https://practicum.yandex.ru/" className="footer__item" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a href="https://github.com/mrrezak555" className="footer__item" target="_blank" rel="noreferrer">Github</a>
        </div>
      </div>
    </footer>
  )
}
