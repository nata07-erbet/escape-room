import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './protected-route';

import { Catalog } from '../../pages/catalog/catalog';
import { Quest } from '../../pages/quest/quest';
import { Contacts } from '../../pages/contacts/contacts';
import { Login } from '../../pages/login/login';
import { Booking } from '../../pages/booking/booking';
import { MyQuests } from '../../pages/my-quests/my-quests';
import { NotFoundPage } from '../../pages/404/404';
import { mocks, mock, places, bookingQuests } from '../../mocks/mocks';
import { AppRoute, AuthorizationStatus } from '../../const/const';

const router = createBrowserRouter([
  {
    path: AppRoute.Main,
    element: <Catalog quests={mocks} />,
  },
  {
    path: AppRoute.Contacts,
    element: <Contacts />,
  },
  {
    path: `${AppRoute.Quest}/:questId`,
    element: <Quest quest={mock} />,
  },
  {
    path: AppRoute.Login,
    element: (
      <ProtectedRoute
        restrictedFor={[AuthorizationStatus.Auth]}
        redirectTo={AppRoute.Main}
      >
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: AppRoute.Booking,
    element: (
      <ProtectedRoute
        restrictedFor={[AuthorizationStatus.NoAuth]}
        redirectTo={AppRoute.Login}
      >
        <Booking quest={mock} places={places} />
      </ProtectedRoute>
    ),
  },
  {
    path: AppRoute.MyQuests,
    element: (
      <ProtectedRoute
        restrictedFor={[AuthorizationStatus.NoAuth]}
        redirectTo={AppRoute.Login}
      >
        <MyQuests quests={bookingQuests} />
      </ProtectedRoute>
    ),
  },

  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
