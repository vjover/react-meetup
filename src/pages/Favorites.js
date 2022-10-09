import {useContext} from 'react';
import FavoritesContext from '../store/favorite-context';
import Meetups from '../components/meetups/Meetups';


export default function FavoritesPage() {

  const favoriteContext = useContext(FavoritesContext);

  let favorites;
  if(favoriteContext.totalFavorites === 0) {
      favorites = <p style={{textAlign: 'center'}}>You got no favorites yet. Please add some favorites</p>
  } else {
      favorites = <Meetups meetups={favoriteContext.favorites} />
  }
  return (
    <section>
      <h1>Favorites Page</h1>
      {favorites}
    </section>
    
  );
}
