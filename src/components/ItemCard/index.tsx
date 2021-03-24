import React from 'react';

import { Image, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import useFavoriteItems from '../../hooks/useFavoriteItems';

import styles from './styles';

interface ItemCardProps {
    name: string,
    year: string,
    poster: string,
    imdbID: string,
}

export default function ItemCard({ name, year, poster, imdbID }: ItemCardProps) {
    const { toggleFavorite, favorites } = useFavoriteItems();

    function handleStarIconColor() {
        return favorites.find(item => item.name === name && item.imdbID === imdbID) ? '#0050EF' : '#D6D6D6';
    }

    return (
        <View style={styles.container}>

            <Image
                style={styles.poster}
                source={{ uri: poster }}
                resizeMode="center"
            />

            <View style={styles.info}>
                <View style={{ maxWidth: '75%' }}>
                    <Text style={{ marginBottom: 5 }}>{name}</Text>
                    <Text>Ano: {year}</Text>
                </View>

                <MaterialIcon
                    onPress={() => toggleFavorite({ name, year, poster, imdbID })}
                    name="star"
                    size={35}
                    color={handleStarIconColor()}
                />
            </View>

        </View>
    )
}