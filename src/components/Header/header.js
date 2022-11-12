import { Route } from 'react-router-dom';
import logo from '../../images/logo-header.svg';


function Header() {
  return (
    <>
      <Route path="/signup">
        <header className="header header_register">
          <img className="header__logo header__logo_dark-theme" src={logo} alt="Логотип" />
          <h1 className="header__title">Добро пожаловать!</h1>
        </header>
      </Route>
      <Route path="/signin">
        <header className="header header_register">
          <img className="header__logo header__logo_dark-theme" src={logo} alt="Логотип" />
          <h1 className="header__title">Рады видеть!</h1>
        </header>
      </Route>

    </>
  );
}

export default Header;