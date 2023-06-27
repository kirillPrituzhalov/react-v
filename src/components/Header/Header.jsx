import s from './Header.module.css';
import logo from '../../logo.svg';

function Header() {
  return (
    <header>
      <div className={s.content}>
        <img src={logo} />
        <nav className={s.nav}>
          <a href="#">Войти</a> или <a href="#">Регистрация</a>
          <button className={s.btnAdd}>Добавить объявление</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
