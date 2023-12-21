import { TResponseBookedQuest } from '../../types/types';

type MyQuest ={
  bookingQuest: TResponseBookedQuest;
  onClickDeleteBooking:() => void;
}


function MyQuest ({bookingQuest, onClickDeleteBooking}: MyQuest){

  return (
    <div className="quest-card" key={bookingQuest.id}>
      <div className="quest-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={bookingQuest.quest.previewImgWebp}
          />
          <img
            src={bookingQuest.quest.previewImg}
            srcSet={bookingQuest.quest.previewImg}
            width={344}
            height={232}
            alt={bookingQuest.quest.title}
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper">
          <a className="quest-card__link" href="quest.html">
            {bookingQuest.quest.title}
          </a>
          <span className="quest-card__info">
                [{bookingQuest.date},&nbsp;{bookingQuest.time} {bookingQuest.location.address}
                      ]
          </span>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width={11} height={14} aria-hidden="true">
              <use xlinkHref="#icon-person" />
            </svg>
            {bookingQuest.quest.peopleMinMax[0]}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width={14} height={14} aria-hidden="true">
              <use xlinkHref="#icon-level" />
            </svg>
            {bookingQuest.quest.level}
          </li>
        </ul>
        <button
          className="btn btn--accent btn--secondary quest-card__btn"
          type="button"
          onClick={onClickDeleteBooking}
        >
          Отменить
        </button>
      </div>
    </div>
  );
}

export { MyQuest };
