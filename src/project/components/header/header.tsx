import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const/const';

function Header() {
  return(
    <header className="header">
      <div className="container container--size-l">
        <NavLink
          className="logo header__logo"
          to="index.html"
          aria-label="Перейти на Главную"
        >
          <svg width={134} height={52} aria-hidden="true">
            <use xlinkHref="#logo" />
          </svg>
        </NavLink>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <NavLink
                className="link not-disabled active"
                to={AppRoute.Main}
              >
                Квесты
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink
                className="link"
                to={AppRoute.Contacts}
              >
            Контакты
              </NavLink>
            </li>
            <li className="main-nav__item">
              <NavLink
                className="link"
                to={AppRoute.MyQuests}
              >
            Мои бронирования
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          <NavLink
            className="btn btn--accent header__side-item"
            to={AppRoute.Main}
          >
        Выйти
          </NavLink>
          <NavLink
            className="link header__side-item header__phone-link"
            to="#"
          >
        8 (000) 111-11-11
          </NavLink>
        </div>
      </div>
    </header>
  );
}


export { Header };
