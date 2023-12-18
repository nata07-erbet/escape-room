import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { mockAuthStatus } from '../../mocks/auth';

type TProtectedRoute = {
	restrictedFor: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
};

function ProtectedRoute({restrictedFor, redirectTo, children}: TProtectedRoute): JSX.Element {
  const authorizationStatus = mockAuthStatus();

  return (
    restrictedFor.includes(authorizationStatus) //пояснить
      ? (<Navigate to={redirectTo} />)
      : (children)
  );
}

export { ProtectedRoute };
