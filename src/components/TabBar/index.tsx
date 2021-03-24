import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function TabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row', height: 50, backgroundColor: '#fff' }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const handleTabBarIconName = (tabBarLabel: string) => {
                    if (tabBarLabel === 'Favoritos') {
                        return 'star';
                    }
                    return 'movie-search';
                }

                return (
                    <TouchableOpacity
                        key={index.toString()}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                style={{ marginRight: 15 }}
                                name={handleTabBarIconName(options.tabBarLabel)}
                                size={25}
                                color={isFocused ? 'blue' : '#222'}
                            />

                            <Text style={{ color: isFocused ? 'blue' : '#222' }}>
                                {label}
                            </Text>
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}