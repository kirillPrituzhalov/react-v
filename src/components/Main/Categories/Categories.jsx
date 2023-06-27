import { NavLink } from 'react-router-dom';
import s from './Categories.module.css';
import img from './img/1.png';

function Categories() {
  return (
    <div>
      <div className={s.inside}>
        <h2>Просмотр категорий</h2>
        <NavLink to={''}>
          <div>
            <img src={img} />
          </div>
          <div>Комплекты</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Categories;
