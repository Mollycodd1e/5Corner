import React from 'react';

function Header() {
  return (
    <header className="main-header">
    <h1 className="visually-hidden">Навигация по сайту</h1>
    <div className="main-header__wrapper">
      <nav className="main-header__main-nav main-nav">
        <div className="main-nav__form-wrapper">
          <div className="main-nav__menu"></div>
          <button type="submit" aria-label="Кнопка поиска">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.1111 23.2222C18.2476 23.2222 23.2222 18.2476 23.2222 12.1111C23.2222 5.97461 18.2476 1 12.1111 1C5.97461 1 1 5.97461 1 12.1111C1 18.2476 5.97461 23.2222 12.1111 23.2222Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M25.9997 26L19.958 19.9584" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <form>
            <label htmlFor="id-search" className="visually-hidden">Форма поиска по сайту</label>
            <input id="id-search" type="search" placeholder="Поиск" />
          </form>
        </div>
        <div className="main-nav__user-wrapper">
          <ul>
            <li>
              <svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 26V23.2222C23 21.7488 22.4205 20.3357 21.3891 19.2939C20.3576 18.252 18.9587 17.6667 17.5 17.6667H6.5C5.04131 17.6667 3.64236 18.252 2.61091 19.2939C1.57946 20.3357 1 21.7488 1 23.2222V26" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 12.1111C15.0376 12.1111 17.5 9.6238 17.5 6.55556C17.5 3.48731 15.0376 1 12 1C8.96243 1 6.5 3.48731 6.5 6.55556C6.5 9.6238 8.96243 12.1111 12 12.1111Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>   
            </li>
            <li>
              <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.8409 3.21018C26.1568 2.50949 25.3445 1.95365 24.4504 1.57442C23.5563 1.19519 22.598 1 21.6302 1C20.6625 1 19.7042 1.19519 18.8101 1.57442C17.916 1.95365 17.1037 2.50949 16.4195 3.21018L14.9996 4.66368L13.5798 3.21018C12.1978 1.7955 10.3234 1.00073 8.36905 1.00073C6.41466 1.00073 4.54031 1.7955 3.15835 3.21018C1.77638 4.62487 1 6.54359 1 8.54426C1 10.5449 1.77638 12.4637 3.15835 13.8783L4.57823 15.3318L14.9996 26L25.4211 15.3318L26.8409 13.8783C27.5254 13.178 28.0684 12.3464 28.4389 11.4312C28.8093 10.5159 29 9.53496 29 8.54426C29 7.55356 28.8093 6.57258 28.4389 5.65734C28.0684 4.7421 27.5254 3.91054 26.8409 3.21018V3.21018Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </li>
            <li>
              <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.83333 4L1 9V26.5C1 27.163 1.26925 27.7989 1.7485 28.2678C2.22776 28.7366 2.87778 29 3.55556 29H21.4444C22.1222 29 22.7722 28.7366 23.2515 28.2678C23.7308 27.7989 24 27.163 24 26.5V9L20.1667 4H4.83333Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 9H24" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.6111 14C17.6111 15.3261 17.0726 16.5979 16.1141 17.5355C15.1556 18.4732 13.8556 19 12.5 19C11.1445 19 9.84444 18.4732 8.88593 17.5355C7.92741 16.5979 7.38892 15.3261 7.38892 14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="24" cy="8" r="8" fill="black"/>
                <path d="M24.9668 9.0293V5.22656L22.2773 9.0293H24.9668ZM24.9844 12V9.94922H21.3047V8.91797L25.1484 3.58594H26.0391V9.0293H27.2754V9.94922H26.0391V12H24.9844Z" fill="white"/>
              </svg>
            </li>
          </ul>
        </div>
        <a className="main-nav__logo">
          <img src="./img/logo.png" width="160" height="50" alt="Логотип" />
        </a>
        <ul className="main-nav__list">
          <li>
            <a href="#">
              Страница 1
            </a>
          </li>
          <li>
            <a href="#">
              Страница 2
            </a>
          </li>
          <li>
            <a href="#">
              Страница 3
            </a>
          </li>
          <li>
            <a href="#">
              Страница 4
            </a>
          </li>
          <li>
            <a href="#">
              Страница 5
            </a>
          </li>
          <li>
            <a href="#">
              Страница 6
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  ) 
}

export default Header;