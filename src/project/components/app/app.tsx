import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './protected-route';


import { Catalog } from '../../pages/catalog/catalog';
import { Quest } from '../../pages/quest/quest';
import { Contacts } from '../../pages/contacts/contacts';
import { Login } from '../../pages/login/login';
import { Booking } from '../../pages/booking/booking';
import { MyQuests } from '../../pages/my-quests/my-quests';
import { NotFondPage } from '../../pages/404/404';
import { mocks } from '../../mocks/mocks';
import { mock } from '../../mocks/mocks';

import { AppRoute, AuthorizationStatus } from '../../const/const';


const router = createBrowserRouter([
  {
    path: AppRoute.Main,
    element: <Catalog quests={ mocks } />,
  },
  {
    path: AppRoute.Contacts,
    element: <Contacts />
  },
  {
    path: `${AppRoute.Quest}/:questId`,
    element: < Quest quest={ mock }/>
  },
  {
    path: AppRoute.Login,
    element: <Login />
  },
  {
    path: AppRoute.Booking,
    element:
      <ProtectedRoute user={AuthorizationStatus.NoAuth}>
        <Booking />
      </ProtectedRoute>

  },
  {
    path: AppRoute.MyQuests,
    element:
     <ProtectedRoute user={AuthorizationStatus.NoAuth}>
       <MyQuests />
     </ProtectedRoute>
  },

  {
    path: '*',
    element: <NotFondPage />
  }
]);


export default function App() {
  return <RouterProvider router={router} />;
}
