import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const/const';

function NotFoundPage() {
  return (
    <div>
      <p>404 Not found</p>
      <NavLink to={AppRoute.Main}>Go to Main Page</NavLink>
    </div>
  );
}

export { NotFoundPage };
