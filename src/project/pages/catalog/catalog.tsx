import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Card } from '../../components/card/card';
import { FormFilters } from '../../components/form-filters/form-filters';
import {TopicNamesMap, ComplicationMamesMap} from '../../const/const';
import { TQuest, TTopic, TComplication } from '../../types/types';
import { sortingByTopic, sortingByComplication } from '../../utils/sorting';
import { useState } from 'react';

type CatalogProps ={
  quests: TQuest[];
}

function Catalog({quests}: CatalogProps) {

  const [activeFilterTopic, setFilterTopic] = useState<TTopic>('allQuests');
  const [activeFilterComplication, setFilterComplication] = useState<TComplication>('any');

  const getSortingQuestsByTopic = (filter: TTopic) => {
    switch(filter) {
      case TopicNamesMap.allQuests:
      default:
        return sortingByTopic.allQuests(quests);
      case TopicNamesMap.adventures:
        return sortingByTopic.adventures(quests);
      case TopicNamesMap.horror:
        return sortingByTopic.horror(quests);
      case TopicNamesMap.mystic:
        return sortingByTopic.mystic(quests);
      case TopicNamesMap.detective:
        return sortingByTopic.detective(quests);
      case TopicNamesMap['sci-fi']:
        return sortingByTopic['sci-fi'](quests);
    }
  };

  let sortedQuestsByTopic = getSortingQuestsByTopic(activeFilterTopic);

  const getSortingQuestsByComplication = (filter: TComplication) => {
    switch(filter) {
      case ComplicationMamesMap.any:
      default:
        return sortingByComplication.any(sortedQuestsByTopic);
      case ComplicationMamesMap.easy:
        return sortingByComplication.easy(sortedQuestsByTopic);
      case ComplicationMamesMap.hard:
        return sortingByComplication.hard(sortedQuestsByTopic);
      case ComplicationMamesMap.medium:
        return sortingByComplication.medium(sortedQuestsByTopic);
    }
  };

  let sortedQuestsByComplication = getSortingQuestsByComplication(activeFilterComplication);

  const handleSortTopicTypes = (filter: TTopic) => {
    sortedQuestsByTopic = getSortingQuestsByTopic(filter);
    setFilterTopic(filter);
  };

  const handleSortComplicationTypes = (filter: TComplication) => {
    sortedQuestsByComplication = getSortingQuestsByComplication(filter);
    setFilterComplication(filter);
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
            <FormFilters
              activeFilterTopic ={activeFilterTopic}
              onClickTopic ={handleSortTopicTypes}
              activeFilterComplication={activeFilterComplication}
              onClickComplication = {handleSortComplicationTypes}
            />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            {sortedQuestsByComplication.map((quest) => (
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
