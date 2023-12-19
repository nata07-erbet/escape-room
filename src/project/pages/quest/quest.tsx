import { Link } from 'react-router-dom';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { TQuestFull } from '../../types/types';
import { AppRoute } from '../../const/const';

type QuestProp = {
  quest: TQuestFull;

};

function Quest({ quest }: QuestProp) {
  const { title, type, peopleMinMax, level, description, coverImg } = quest;

  return (
    <>
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={coverImg}
            />
            <img
              src={coverImg}
              srcSet={coverImg}
              width={1366}
              height={768}
              alt={title}
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>{type}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {peopleMinMax[0]}–{peopleMinMax[1]}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {level}
              </li>
            </ul>
            <p className="quest-page__description">
              {description}
            </p>
            <Link
              className="btn btn--accent btn--cta quest-page__btn"
              to={AppRoute.Booking} //вот тут точно косяк
            >
            Забронировать
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>

  );
}

export { Quest };
