import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';

type TProtectedRoute = {
	user: AuthorizationStatus;
	children: JSX.Element;
};

function ProtectedRoute({user, children}: TProtectedRoute): JSX.Element {
  return (
    user === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );

}

export { ProtectedRoute };
