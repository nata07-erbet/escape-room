import { TopicNamesMap, ComplicationNamesMap } from '../../const/const';
import { TTopic, TComplication } from '../../types/user.types';

type FormFilters = {
  onClickTopic: (filterTopic: TTopic) => void;
  activeFilterTopic: TTopic;
  activeFilterComplication: TComplication;
  onClickComplication: (filterComplication: TComplication) => void;
};

function FormFilters({
  activeFilterTopic,
  activeFilterComplication,
  onClickTopic,
  onClickComplication,
}: FormFilters) {
  const handleTopicFilterChange = (value: TTopic) => {
    onClickTopic(value);
  };

  const handleComplicationFilterChange = (value: TComplication) => {
    onClickComplication(value);
  };

  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          {Object.entries(TopicNamesMap).map(([key, value]) => (
            <li className="filter__item" key={key}>
              <input
                type="radio"
                name="type"
                id={key}
                checked={key === activeFilterTopic}
                onChange={() => handleTopicFilterChange(key as TTopic)}
              />
              <label
                className="filter__label"
                htmlFor={key}
              >
                <svg
                  className="filter__icon"
                  width={26}
                  height={30}
                  aria-hidden="true"
                >
                  <use xlinkHref={`#icon-${key}`} />
                </svg>
                <span className="filter__label-text">{value}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          {Object.entries(ComplicationNamesMap).map(([key, value]) => (
            <li className="filter__item" key={key}>
              <input
                type="radio"
                name="level"
                id={key}
                checked={key === activeFilterComplication}
                onChange={() =>
                  handleComplicationFilterChange(key as TComplication)}
              />
              <label className="filter__label" htmlFor={key}>
                <span className="filter__label-text">{value}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>
    </form>
  );
}

export { FormFilters };
