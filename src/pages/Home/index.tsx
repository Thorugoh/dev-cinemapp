import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { findMovieByName } from '../../services/omdbServices';

import Header from '../../components/Header';
import ItemCard from '../../components/ItemCard';
import CustomButton from '../../components/CustomButton';
import { FlatList } from 'react-native-gesture-handler';

import styles from './styles';

interface SearchResultsDTO {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}

export default function Home() {
    const [searchResult, setSearchResult] = useState<SearchResultsDTO[]>([]);
    const [inputTextSearch, setInputTextSearch] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    function searchNewMovie() {
        findMovieByName(inputTextSearch)
            .then(({ data }) => {
                if (data.Response === "True") {
                    setTotalResults(data.totalResults);
                    setSearchResult(data.Search);

                    return;
                }
                setSearchResult([]);
            });
    }

    function thereIsNextPage() {
        return pageNumber + 1 <= Math.ceil(totalResults / 10)
    }

    function loadNextPage() {
        if (!searchResult.length) return;

        setPageNumber(currentPage => currentPage + 1);
        findMovieByName(inputTextSearch, pageNumber)
            .then(({ data }) => {
                if (data.Response) {
                    setSearchResult(currentItems => [...currentItems, ...data.Search])
                }
            });
    }

    function renderListFooterComponent() {
        if (thereIsNextPage()) {
            return (
                <TouchableOpacity
                    style={styles.nextPageTextButton}
                    onPress={loadNextPage}
                >
                    <Text style={{ color: '#FFF' }}>Carregar mais...</Text>
                </TouchableOpacity>
            )
        }
        return <View style={{ marginBottom: 140, justifyContent: 'center', alignItems: 'center' }} />
    }

    return (
        <View style={styles.container}>
            <Header />

            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                <TextInput
                    placeholder="O que você busca..."
                    placeholderTextColor='#393939'
                    style={styles.input}
                    onChangeText={(text) => setInputTextSearch(text)}
                />
                <CustomButton onPress={() => searchNewMovie()} title="Buscar" />
            </View>

            <View>

                {!!searchResult?.length &&
                    <FlatList
                        data={searchResult}
                        renderItem={({ item }) => {
                            return (
                                <ItemCard
                                    name={item?.Title}
                                    year={item?.Year}
                                    poster={item?.Poster}
                                    imdbID={item?.imdbID}
                                />
                            )
                        }}
                        keyExtractor={(item, index) => item?.imdbID + index}
                        ListFooterComponent={renderListFooterComponent()}
                    />
                }
            </View>
        </View>
    )
}