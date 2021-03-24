import { useContext } from 'react';
import { CineContext } from '../context';

interface CineItem {
    name: string,
    year: string,
    poster: string,
    imdbID: string,
}

const useFavoritesItem = () => {
    const { favorites, setFavorites } = useContext(CineContext);

    function saveToFavorites({ name, year, poster, imdbID }: CineItem) {
        setFavorites(currentFavorites => {
            return [...currentFavorites, { name, year, poster, imdbID }];
        })
    }

    function removeFromFavorites(name: string, imdbID: string) {
        setFavorites(currentFavorites => {
            return currentFavorites.filter((item) => {
                return item.imdbID !== imdbID || item.name !== name
            });
        })
    }

    function toggleFavorite({ name, year, poster, imdbID }: CineItem) {
        const foundFavorite = favorites.find(item => item.name === name && item.imdbID === imdbID)

        if (foundFavorite) {
            removeFromFavorites(name, imdbID);
            return;
        }

        saveToFavorites({ name, year, poster, imdbID });
    }

    return { favorites, saveToFavorites, toggleFavorite, removeFromFavorites };
};

export default useFavoritesItem;
