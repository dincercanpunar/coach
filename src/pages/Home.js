import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Home as IconHome } from '../components/icons'
import { useTheme } from '@react-navigation/native';
import {
    Container
} from '@/components/layout'
import {
    Calendar,
    Countdown
} from './home'


const Home = () => {
    const { colors } = useTheme();

    return (
        <Container>
            <Calendar />
            <View style={styles.container}>
                <Countdown />
            </View>
        </Container>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
