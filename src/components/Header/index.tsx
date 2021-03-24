import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cine Sthima</Text>
            <Text style={styles.subtitle}>Bem-vindo ao mundo espetacular do cinema</Text>
        </View>
    )
}