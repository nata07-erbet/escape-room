import { TOPICS, COMPLICATION } from '../../const/const';

function FormFilters() {
  return(
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          {TOPICS.map((item) => (
            <li
              className="filter__item"
              key={item}
            >
              <input type="radio" name="type" id="all" defaultChecked/>
              <label className="filter__label" htmlFor="all">
                <svg className="filter__icon" width={26} height={30} aria-hidden="true">
                  <use xlinkHref="#icon-all-quests" />
                </svg>
                <span className="filter__label-text">{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>


      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          {COMPLICATION.map((item) =>(
            <li
              className="filter__item"
              key={item}
            >
              <input type="radio" name="level" id="any" defaultChecked />
              <label className="filter__label" htmlFor="any">
                <span className="filter__label-text">{item}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </form>

  );
}

export { FormFilters };
