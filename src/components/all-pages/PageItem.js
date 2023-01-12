import { useContext } from 'react';

import Card from '../ui/Card';
import './PageItem.css';
import FavoritesContext from '../../store/favorit-context';

function PageItem (props) {
    const favoritesCont = useContext(FavoritesContext);

    const itemFav = favoritesCont.itemsIsFavorite(props.id);

    function toggleFavoritesHandler() {
        if (itemFav) {
            favoritesCont.removeFavorite(props.id);
        } else {
            favoritesCont.addFavorite({
                id: props.id,
                title: props.title,
                image: props.images,
                address: props.address,
                description: props.description
            });
        }
    }

    return <li className='item'>
        <Card>
            <div className='image'>
                <img src={props.image} alt={props.title} />
            </div>
            <div className='content'>
                <h3>{props.title}</h3>
                <address>ADDRESS: {props.address}</address>
                <p>DESCRIPTION: {props.description}</p>
            </div>
            <div className='actions'>
                <button onClick={toggleFavoritesHandler}>{itemFav ? 'Remove from Favorites' : 'To Favorites'}</button>
            </div>
        </Card>
    </li>;
}

export default PageItem;