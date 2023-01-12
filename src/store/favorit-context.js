import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoritePage) => {},
    removeFavorite: (pageId) => {},
    itemsIsFavorite: (pageId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);

    function addFavoriteHandler(favoritePage) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoritePage); //concat-nadovezuje se na novi niz
        });
    }

    function removeFavoriteHandler(pageId) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(page => page.id !== pageId); //filtrira i prikazuje samo id koji se poklapa
        });
    }

    function itemIsFavoriteHandler(pageId) {
        return userFavorites.some(page => page.id === pageId); //some-proverava da li bar jedan element u nizu prolazi test; nepravi novi niz; vraca TRUE samo ako u nizu pronadje element za koji data f-ja vraca TRUE, inace vraca false;
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemsIsFavorite: itemIsFavoriteHandler
    };


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>;
}

export default FavoritesContext;