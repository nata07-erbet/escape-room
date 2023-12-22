import { useState } from 'react';

import { ComplicationMap, TopicMap} from '../../const/const';
import { TTopic, TComplication } from '../../types/types';

type FormFilters ={
  onClick: (filterTopic: TTopic) => void;
};

function FormFilters({ onClick }: FormFilters) {
  const [filterTopicActive, setFilterTopicActive] = useState(TopicMap.allQuests);
  const [filterComplicationActive, setFilterComplicationActive] = useState(ComplicationMap.any);


  const handleTopicFilterChange = (key: TTopic) => {
    onClick(key);


  };

  const handleComplicatioFilterChange = (key: TTopic) => {
    onClick(key);

  };


  return(
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          {(
            Object.entries(TopicMap) as [ //что это за дичь с типами?
              TTopic,
              (typeof TopicMap)[TTopic]
            ][]
          ).map(([key, value]) => (
            <li
              className="filter__item"
              key={key}
            >
              <input
                type="radio"
                name="type"
                id={value}
                checked = {value === filterTopicActive}
                onClick={() => handleTopicFilterChange(key)}
              />
              <label className="filter__label" htmlFor={key}>
                <svg className="filter__icon" width={26} height={30} aria-hidden="true">
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
          {(Object.entries(ComplicationMap) as [
            TComplication,
            (typeof ComplicationMap)[TComplication]
          ][])
            .map(([key, value]) =>(
              <li
                className="filter__item"
                key={key}
              >
                <input
                  type="radio"
                  name="level"
                  id={value}
                  checked = {value === filterComplicationActive}
                  onClick={() => handleComplicatioFilterChange(key)}
                />
                <label className="filter__label" htmlFor="any">
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
