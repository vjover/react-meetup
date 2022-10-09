import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import {useContext} from 'react';
import FavoritesContext from '../../store/favorite-context';

function MeetupItem(props) {
  const favoriteContext = useContext(FavoritesContext);
  const isItemFavorite = favoriteContext.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    
    if(isItemFavorite) {
      favoriteContext.removeFavorite(props.id);
    } else {
      
      console.log("ID:" + props.id);
        favoriteContext.addFavorite({
            id: props.id,
            title: props.title,
            image: props.image,
            address: props.address,
            description: props.description
           
        });
    }
}



return (
  <li  className={classes.item}>
    <Card>
      <div className={classes.image}>
        
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button 
        onClick=
        {toggleFavoriteStatusHandler}>{isItemFavorite?'Remove From Favorites': 'Add to Favorites'}</button>
        
      </div>
    </Card>
  </li>
);


}

export default MeetupItem;
