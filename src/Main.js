import 'react-native-gesture-handler';
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Router from './router/Router'
import moment from 'moment'
import 'moment/locale/tr'

moment.locale('tr')

const Main = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Router />
        </SafeAreaView>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
