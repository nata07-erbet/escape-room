import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { authorizationStatus } from '../../mocks/auth';

type TProtectedRoute = {
  restrictedFor: AuthorizationStatus[];
  redirectTo: AppRoute;
  children: JSX.Element;
};

function ProtectedRoute({
  restrictedFor,
  redirectTo,
  children,
}: TProtectedRoute): JSX.Element {
  return restrictedFor.includes(authorizationStatus) ? (
    <Navigate to={redirectTo} />
  ) : (
    children
  );
}

export { ProtectedRoute };
