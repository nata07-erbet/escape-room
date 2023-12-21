import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Card } from '../../components/card/card';
import { FormFilters } from '../../components/form-filters/form-filters';
import { TQuest } from '../../types/types';
import { TopicMap } from '../../const/const';

type CatalogProps ={
  quests: TQuest[];
}

function Catalog({quests}: CatalogProps) {

  const getSortedQuestsByAdventure = () => {
    const sortedQuests = quests.filter((quest) => quest.type === TopicMap.adventure);
    return sortedQuests;
  };
// ПОЛУЧИЛОСЬ!!!  
  console.log(getSortedQuestsByAdventure());

  const handleSortTypes = () => {
    console.log('hi');
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
            <FormFilters onClick ={ handleSortTypes } />
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <div className="cards-grid">
            {quests.map((quest) => (
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
