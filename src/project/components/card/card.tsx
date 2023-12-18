import { NavLink } from 'react-router-dom';

import { TQuest } from '../../types/types';
import { AppRoute } from '../../const/const';

type TCard ={
  quest: TQuest;
}

function Card({ quest }: TCard) {
  const {id, title, level, previewImg, peopleMinMax} = quest;

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={previewImg}
          />
          <img
            src={previewImg}
            srcSet="img/content/crypt/crypt-size-s@2x.jpg 2x"
            width={344}
            height={232}
            alt="Мужчина в клетке в подземелье."
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <NavLink className="quest-card__link" to={`${AppRoute.Quest}/${id}`}>
            {title}
          </NavLink>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {peopleMinMax}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {level}
          </li>
        </ul>
      </div>
    </div>

  );

}

export { Card };
