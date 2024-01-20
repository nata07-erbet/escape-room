import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { MyQuest } from '../../components/my-quest/my-quest';
import { TResponseBookedQuest } from '../../types/user.types';
import { useState } from 'react';

type MyQuestsProps = {
  quests: TResponseBookedQuest[];
};

function MyQuests({ quests }: MyQuestsProps) {
  const [ bookingQuests, setBookingQuests ] = useState(quests);

  const handleClickDeleteBooking = (id:string) => {
    setBookingQuests((prevState) =>
      prevState.filter((quest) => quest.id !== id)
    );
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
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="title title--size-m page-content__title">
              Мои бронирования
            </h1>
          </div>
          <div className="cards-grid">
            {bookingQuests.map((bookingQuest) => (
              <MyQuest
                bookingQuest={bookingQuest}
                key={bookingQuest.id}
                onClickDeleteBooking ={
                  () => handleClickDeleteBooking(bookingQuest.id) //почему здесь вызов?
                }
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
}

export { MyQuests };

