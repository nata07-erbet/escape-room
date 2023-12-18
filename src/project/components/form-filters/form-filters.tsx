import { useState } from 'react';

import { ComplicationMap, TopicMap} from '../../const/const';
const defaultTopicInput = TopicMap.allQuests;
const defaultComplicationInput = ComplicationMap.Any;

function FormFilters() {
  const [filterTopic, setFilterTopic] = useState(defaultTopicInput);
  const [filterComplication, setFilterComplication] = useState(defaultComplicationInput);

  return(
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          {Object.entries(TopicMap)
            .map(([key, value]) => (
              <li
                className="filter__item"
                key={key}
              >
                <input
                  type="radio"
                  name="type"
                  id={key}
                  checked = {value === filterTopic}
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
          {Object.entries(ComplicationMap)
            .map(([key, value]) =>(
              <li
                className="filter__item"
                key={key}
              >
                <input
                  type="radio"
                  name="level"
                  id="any"
                  checked = {value === filterComplication}
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
