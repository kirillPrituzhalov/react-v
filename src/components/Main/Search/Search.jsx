import s from './Search.module.css';

function Search() {
  return (
    <>
      <div className={s.homeSearch}>
        <div className={s.cover}></div>
        <div className={s.slide}></div>
        <div className={`${s.box} ${s.content}`}>
          <form>
            <div className={s.wrapperSearch}>
              <div className={s.col1}>
                <input type="text" placeholder="Что вы ищете?" />
              </div>
              <div className={s.col2}>
                <input type="text" placeholder="Местоположение" />
              </div>
              <div className={s.col3}>
                <input type="text" placeholder="Категория" />
              </div>
              <div className={s.col4}>
                <button className={s.btn}>Поиск</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Search;
