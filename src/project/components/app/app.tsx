import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './protected-route';


import { Catalog } from '../../pages/catalog/catalog';
import { Quest } from '../../pages/quest/quest';
import { Contacts } from '../../pages/contacts/contacts';
import { Login } from '../../pages/login/login';
import { Booking } from '../../pages/booking/booking';
import { MyQuests } from '../../pages/my-quests/my-quests';
import { NotFondPage } from '../../pages/404/404';


import { AppRoute, AuthorizationStatus } from '../../const/const';

const router = createBrowserRouter([
  {
    path: AppRoute.Main,
    element: <Catalog />,
  },
  {
    path: AppRoute.Contacts,
    element: <Contacts />
  },
  {
    path: AppRoute.Quest,
    element: < Quest/>
  },
  {
    path: AppRoute.Login,
    element: <Login />
  },
  {
    children:[
      {
        element:  <Booking />,
        index: true //?
      },
    ],
    path: AppRoute.Booking,
    element:<ProtectedRoute user={AuthorizationStatus.Auth} />

  },
  {
    children:[
      {
        element: <MyQuests />,
        index: true //?
      },
    ],
    path: AppRoute.MyQuests,
    element: <ProtectedRoute user={AuthorizationStatus.Auth} />
  },

  {
    path: '*',
    element: <NotFondPage />
  }
]);

// <Contacts />
// <Booking />
// <MyQuests />


export default function App() {
  return <RouterProvider router={router} />;
}
