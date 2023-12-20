import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { TBookingQuest } from '../../types/types';
import { TQuestFull } from '../../types/types';
import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';
import { AppRoute, RequestStatus } from '../../const/const';
import { NotSendForm } from '../404/not-send-form';

type BookingProps ={
  place: TBookingQuest[];
  quest: TQuestFull;
}

function Booking ({ place, quest }: BookingProps) {
  const navigate = useNavigate();

  const { title, peopleMinMax } = quest;
  const { location, slots} = place[0];
  const { today , tomorrow } = slots;

  const isSuccsess = false;
  const isNotSuccsess = true;

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = () =>{
    if(isSuccsess) {
      navigate(AppRoute.MyQuests);
    }
    alert('Форма не отправлена - попробуйте еще раз!');
  };


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
            onSubmit={handleSubmit(onSubmit)}
          >
            {isNotSuccsess && <p>Форма не отправлена - попробуйте еще раз!</p>}

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
                  {...register('name', {
                    required: 'Please enter your name',
                    pattern: {
                      value: '^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$',
                    },
                  })}
                  placeholder="Имя"
                />
                {errors.name && <><br/><span role="alert">&apos;{errors.name?.message}&apos;</span></>}
              </div>
              <div className="custom-input booking-form__input">

                <label className="custom-input__label" htmlFor="tel">
            Контактный телефон
                </label>
                <input
                  type="tel"
                  id="tel"
                  {...register('tel',{
                    required: 'Укажите контактный телефон',
                    pattern: {
                      value: '^(\+?7|8)?9\d{9}$',
                    }
                  })}
                  placeholder="Телефон"
                />
                {errors.tel && <><br/><span role="alert">&apos;{errors.tel?.message}&apos;</span></>}
              </div>

              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="person">
            Количество участников
                </label>
                <input
                  type="number"
                  id="person"
                  {...register('person', {
                    required : 'Введите количество участников',
                    pattern: {
                      value: `[${peopleMinMax[0]}- ${peopleMinMax[1]}}]`,
                    }
                  })}
                  placeholder="Количество участников"
                />
                {errors.person && <><br/><span role="alert">&apos;{errors.person?.message}&apos;</span></>}
              </div>

              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                <input
                  type="checkbox"
                  id="children"
                  {...register('children', {
                    required: 'Укажите целое число детей',
                    pattern: {
                      value: '/^[\dA-Z]+$/i',
                    }
                  })}
                  defaultChecked
                />
                {errors.children && <><br/><span role="alert">&apos;{errors.children?.message}&apos;</span></>}

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
