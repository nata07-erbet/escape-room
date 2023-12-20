import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { TBookingQuest } from '../../types/types';
import { TQuestFull } from '../../types/types';
import { useForm } from 'react-hook-form';

type BookingProps ={
  place: TBookingQuest[];
  quest: TQuestFull;
}

function Booking ({ place, quest }: BookingProps) {
  const { title } = quest;
  const { location, slots} = place[0];
  const { today , tomorrow } = slots;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (evt:SubmitEvent<HTMLElement>) => evt.preventDefault(); //не знаю какой тип писать

  return (
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
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">
            Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">
              {title}
            </p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container" />
              </div>

              <p className="booking-map__address">
                {location.address}
              </p>
            </div>
          </div>
          <form
            className="booking-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
          >
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Выбор даты и времени</legend>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Сегодня</legend>
                <div className="booking-form__date-inner-wrapper">
                  {today.map((item) =>(

                    <label className="custom-radio booking-form__date" key={item.time}>
                      <input
                        type="radio"
                        id={item.time}
                        required
                        value={item.time}
                        disabled={item.isAvailable}
                      />
                      <span className="custom-radio__label">{item.time}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Завтра</legend>
                <div className="booking-form__date-inner-wrapper">
                  {tomorrow.map((item) => (
                    <label className="custom-radio booking-form__date" key={item.time}>
                      <input
                        type="radio"
                        id={item.time}
                        name="date"
                        required
                        value={item.time}
                        disabled={item.isAvailable}
                      />
                      <span className="custom-radio__label">{item.time}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </fieldset>

            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Контактная информация</legend>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="name">
            Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', {required: true})}
                  placeholder="Имя"
                  required
                  pattern="^/[А-Яа-яЁёA-Za-z'- ]{1,15}$" // хз?
                />
                {errors.name?.type === 'required' && <><br/><span role="alert">&apos;Укажите имя&apos;</span></>}
              </div>
              <div className="custom-input booking-form__input">

                <label className="custom-input__label" htmlFor="tel">
            Контактный телефон
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Телефон"
                  required
                  pattern="^(\+?7|8)?9\d{9}$" //хз?
                />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="person">
            Количество участников
                </label>
                <input
                  type="number"
                  id="person"
                  name="person"
                  placeholder="Количество участников"
                  required
                />
              </div>
              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                <input
                  type="checkbox"
                  id="children"
                  name="children"
                  defaultChecked
                />
                <span className="custom-checkbox__icon">
                  <svg width={20} height={17} aria-hidden="true">
                    <use xlinkHref="#icon-tick" />
                  </svg>
                </span>
                <span className="custom-checkbox__label">
            Со&nbsp;мной будут дети
                </span>
              </label>
            </fieldset>
            <button
              className="btn btn--accent btn--cta booking-form__submit"
              type="submit"
              onSubmit={handleSubmit(onSubmit)}
            >
        Забронировать
            </button>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
              <input
                type="checkbox"
                id="id-order-agreement"
                name="user-agreement"
                required
              />
              <span className="custom-checkbox__icon">
                <svg width={20} height={17} aria-hidden="true">
                  <use xlinkHref="#icon-tick" />
                </svg>
              </span>
              <span className="custom-checkbox__label">
          Я&nbsp;согласен с
                <a className="link link--active-silver link--underlined" href="#">
            правилами обработки персональных данных
                </a>
          &nbsp;и пользовательским соглашением
              </span>
            </label>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export { Booking };
