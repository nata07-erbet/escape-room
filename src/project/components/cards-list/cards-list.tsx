import { TQuest } from '../../types/types';

import { Card } from '../card/card';

type TCardsList ={
  quests: TQuest[];
}

function CardsList({ quests }: TCardsList) {
  return(

    <div className="cards-grid">
      {quests.map((quest) => (
        <Card
          quest={quest}
          key={quest.id}
        />
      ))}
    </div>
  );
}

export { CardsList };
