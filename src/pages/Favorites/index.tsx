import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import useFavoritesItem from '../../hooks/useFavoriteItems';

export default function Favorites() {
    const { favorites } = useFavoritesItem();

    return (
        <View style={{ backgroundColor: '#1F2923', flex: 1, padding: 15 }}>
            <Header />
            {!!favorites.length && <FlatList
                data={favorites}
                renderItem={({ item }) =>
                    <ItemCard
                        name={item?.name}
                        year={item?.year}
                        poster={item?.poster}
                        imdbID={item?.imdbID}
                    />
                }
                keyExtractor={(item, index) => item?.imdbID + index}
            />}
        </View>
    )
}