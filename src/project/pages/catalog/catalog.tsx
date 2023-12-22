import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Card } from '../../components/card/card';
import { FormFilters } from '../../components/form-filters/form-filters';
import {TopicMapForSorting, ComplicationMapForSorting} from '../../const/const';
import { TQuest, TTopic, TComplication } from '../../types/types';
import { sortingByTopic, sortingByComplication } from '../../utils/sorting';
import { useState } from 'react';

type CatalogProps ={
  quests: TQuest[];
}

function Catalog({quests}: CatalogProps) {
  const [activeFilter, setActiveFilter] = useState<TTopic>(TopicMapForSorting.allQuests);


  const getSortingQuestsByTopic = (filter: TTopic) => {
    switch(filter) {
      case 'allQuests':
      default:
        return sortingByTopic.allQuests(quests);
      case 'adventure':
        return sortingByTopic.adventure(quests);
      case 'horror':
        return sortingByTopic.horror(quests);
      case 'mystic':
        return sortingByTopic.mystic(quests);
      case 'detective':
        return sortingByTopic.detective(quests);
      case 'sciFi':
        return sortingByTopic.sciFi(quests);
    }
  };

  let sortedQuests = (getSortingQuestsByTopic(activeFilter));

  const handleSortTypes = (filter: TTopic) => {
    sortedQuests = getSortingQuestsByTopic(activeFilter);
    setActiveFilter(filter);
  };


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
            <FormFilters activeFilter ={activeFilter} onClick ={ handleSortTypes } />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            {sortedQuests.map((quest) => (
              <Card
                quest={quest}
                key={quest.id}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export { Catalog };
