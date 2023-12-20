import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { TResponseBookedQuest } from '../../types/types';

type MyQuestsProps = {
  quests: TResponseBookedQuest[];
};

function MyQuests({ quests }: MyQuestsProps) {

  return(
    <div className="wrapper">
      <Header />
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-bg-size-m.webp, img/content/maniac/maniac-bg-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-bg-size-m.jpg"
              srcSet="img/content/maniac/maniac-bg-size-m@2x.jpg 2x"
              width={1366}
              height={1959}
              alt=""
            />
          </picture>
        </div>
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">
          Мои бронирования
            </h1>
          </div>
          <div className="cards-grid">
            {quests.map((booking) => (
              <div className="quest-card" key={booking.id}>
                <div className="quest-card__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={booking.quest.previewImgWebp}
                    />
                    <img
                      src={booking.quest.previewImg}
                      srcSet={booking.quest.previewImg}
                      width={344}
                      height={232}
                      alt={booking.quest.title}
                    />
                  </picture>
                </div>
                <div className="quest-card__content">
                  <div className="quest-card__info-wrapper">
                    <a className="quest-card__link" href="quest.html">
                      {booking.quest.title}
                    </a>
                    <span className="quest-card__info">
                [{booking.date},&nbsp;{booking.time} {booking.location.address}
                      ]
                    </span>
                  </div>
                  <ul className="tags quest-card__tags">
                    <li className="tags__item">
                      <svg width={11} height={14} aria-hidden="true">
                        <use xlinkHref="#icon-person" />
                      </svg>
                      {booking.quest.peopleMinMax[0]}&nbsp;чел
                    </li>
                    <li className="tags__item">
                      <svg width={14} height={14} aria-hidden="true">
                        <use xlinkHref="#icon-level" />
                      </svg>
                      {booking.quest.level}
                    </li>
                  </ul>
                  <button
                    className="btn btn--accent btn--secondary quest-card__btn"
                    type="button"
                  >
                     Отменить
                  </button>
                </div>
              </div>
            ))}

          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export { MyQuests };

