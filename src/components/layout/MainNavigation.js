import {Link} from 'react-router-dom'
import classes from "./MainNavigation.module.css";
import {useContext} from 'react';
import FavoritesContext from '../../store/favorite-context';

export default function MainNavigation() {
  const favoriteContext = useContext(FavoritesContext)
  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
          <Link to="/">All Meetups</Link>
           
          </li>

          <li>
          <Link to="/new-meetup">Add New Meetup</Link>
           
          </li>
          <li>
          <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{favoriteContext.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
