import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from '@react-navigation/native';

const Container = ({children}) => {
    const { colors } = useTheme();
    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {children}
        </View>
    )
}

export default Container

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
