import Categories from './Categories/Categories';
import s from './Main.module.css';
import Search from './Search/Search';

function Main() {
  return (
    <>
      <Search></Search>
      <main className={s.content}>
        <Categories></Categories>
      </main>
    </>
  );
}

export default Main;
