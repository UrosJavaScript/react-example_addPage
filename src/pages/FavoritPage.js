import { useContext } from "react";

import FavoritesContext from "../store/favorit-context"; //objekat koji se koristi
import PageList from "../components/all-pages/PageList";

function FavoritPage() {
    const favoriteC = useContext(FavoritesContext);

    let content;

    if (favoriteC.totalFavorites === 0) {
        content = <p>You got on favorites yet. Start adding some?</p>
    } else {
        content = <PageList res={favoriteC.favorites} />
    }

    return <section>
        <h1>My Favorites</h1>
        {content}
    </section>;
}

export default FavoritPage;