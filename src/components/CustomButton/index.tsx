import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface CustomButtomProps {
    title: string,
    onPress: () => void;
}

export default function CustomButton({ title, onPress }: CustomButtomProps) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={styles.label} >{title}</Text>
        </TouchableOpacity>
    )
}