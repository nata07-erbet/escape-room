import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { CardsList } from '../../components/cards-list/cards-list';
import { FormFilters } from '../../components/form-filters/form-filters';
import { mocks } from '../../mocks/mocks';

function Catalog() {
  return(
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
        квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
        Выберите тематику
            </h2>
          </div>
          <div className="page-content__item">
            <FormFilters />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <CardsList quests={ mocks} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export { Catalog };
