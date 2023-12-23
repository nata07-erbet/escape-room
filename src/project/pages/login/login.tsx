import { useNavigate } from 'react-router-dom';
import { useForm} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { FormEvent } from 'react';
import { AppRoute } from '../../const/const';

interface FormInputs {
  email: string;
}

function Login() {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();

  const onSubmit = (evt:FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    navigate(AppRoute.Main);
  };

  return (
    <div className="wrapper">
      <Header />
      <main className="decorated-page login">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
            />
            <img
              src="img/content/maniac/maniac-size-m.jpg"
              srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="login__form">
            <form
              className="login-form"
              action="https://echo.htmlacademy.ru/"
              method="post"
              onSubmit={handleSubmit(onSubmit)} // не уходит
            >
              <div className="login-form__inner-wrapper">
                <h1 className="title title--size-s login-form__title">Вход</h1>
                <div className="login-form__inputs">
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="email">
                  E&nbsp;–&nbsp;mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Адрес электронной почты"
                      required
                      {...register('email', {
                        required: true,
                        pattern: {
                          value: ^(.+)@(.+)\.(.+)$, //хз списала
                          message: 'Error mail' //нет сообщения об ошибках
                        }
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name='email'
                      render={({ message }) => <p>{message}</p>}
                    />
                  </div>
                  <div className="custom-input login-form__input">
                    <label className="custom-input__label" htmlFor="password">
                  Пароль
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Пароль"
                      required
                      {...register('password', {
                        required: true, minLength:3, maxLength:15,
                        pattern: {
                          value: '^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)',
                          message: 'Error password'
                        }
                      })
                      }
                    />
                    <ErrorMessage
                      errors={errors}
                      name= 'password'
                      render ={({message}) => <p>{message}</p>}
                    />
                  </div>
                </div>
                <button
                  className="btn btn--accent btn--general login-form__submit"
                  type="submit"
                >
              Войти
                </button>
              </div>
              <label className="custom-checkbox login-form__checkbox">
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
        </div>
      </main>
      <Footer />
    </div>

  );
}

export { Login };
