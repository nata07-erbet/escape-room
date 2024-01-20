import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Card } from '../../components/card/card';
import { FormFilters } from '../../components/form-filters/form-filters';
import { TQuest, TTopic, TComplication } from '../../types/user.types';
import { filterByTopic, filterByComplication } from '../../utils/filters';
import { useState } from 'react';

type CatalogProps = {
  quests: TQuest[];
};

function Catalog({ quests }: CatalogProps) {
  const [activeFilterTopic, setFilterTopic] = useState<TTopic>('allQuests');
  const [activeFilterComplication, setFilterComplication] =
    useState<TComplication>('any');

  const getFilteredQuestsByTopic = (filter: TTopic) =>
    filterByTopic[filter](quests);

  let filteredQuestsByTopic = getFilteredQuestsByTopic(activeFilterTopic);

  const getFilteredQuestsByComplication = (filter: TComplication) =>
    filterByComplication[filter](filteredQuestsByTopic);

  let filteredQuestsByComplication = getFilteredQuestsByComplication(
    activeFilterComplication
  );

  const handleFilterTopic = (filter: TTopic) => {
    filteredQuestsByTopic = getFilteredQuestsByTopic(filter);
    setFilterTopic(filter);
  };

  const handleFilterComplication = (filter: TComplication) => {
    filteredQuestsByComplication = getFilteredQuestsByComplication(filter);
    setFilterComplication(filter);
  };

  return (
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
            <FormFilters
              activeFilterTopic={activeFilterTopic}
              onClickTopic={handleFilterTopic}
              activeFilterComplication={activeFilterComplication}
              onClickComplication={handleFilterComplication}
            />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            {filteredQuestsByComplication.map((quest) => (
              <Card quest={quest} key={quest.id} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export { Catalog };
