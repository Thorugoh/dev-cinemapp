import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface CineItem {
    name: string,
    year: string,
    poster: string,
    imdbID: string,
}

interface CineContainerProps {
    children: React.ReactNode
}

interface CineContextProps {
    favorites: CineItem[],
    setFavorites: React.Dispatch<React.SetStateAction<CineItem[]>>,
}

export const CineContext = createContext({} as CineContextProps);

export const CineContainer = ({ children }: CineContainerProps) => {
    const [favorites, setFavorites] = useState<CineItem[]>([]);

    async function getFavoritesFromStorage() {
        const favorites = await AsyncStorage.getItem('@CineSthima:favorites');

        if (favorites) {
            setFavorites(JSON.parse(favorites))
        }
    }

    async function saveFavoritesInStorage() {
        await AsyncStorage.setItem('@CineSthima:favorites', JSON.stringify(favorites));
    }

    useEffect(() => {
        saveFavoritesInStorage();
    }, [favorites])

    useEffect(() => {
        getFavoritesFromStorage();
    }, [])

    return (
        <CineContext.Provider value={{ favorites, setFavorites }}>
            {children}
        </CineContext.Provider>
    );
};
