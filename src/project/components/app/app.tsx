import { Catalog } from '../../pages/catalog/catalog';
import { Quest } from '../../pages/quest/quest';
import { Contacts } from '../../pages/contacts/contacts';
import { Login } from '../../pages/login/login';
import { Booking } from '../../pages/booking/booking';
import { MyQuests } from '../../pages/my-quests/my-quests';
import { NotFondPage } from '../../pages/404/404';

function App() {
  return (
    <>
      <Catalog />
      <Quest />
      <Contacts />
      <Login />
      <Booking />
      <MyQuests />
      <NotFondPage />
    </>
  );
}

export { App };
