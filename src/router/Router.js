import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppRoute from './AppRoute'

const Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#5e59f7',
        secondary: '#758291',

        success: '#1bc5bd',
        successLight: '#c9f7f5',

        danger: '#f64e60',
        dangerLight: '#ffe2e5',

        warning: '#ffa800',
        warningLight: '#fff4de',

        text: '#3f4254',
        textMuted: '#b5b5c3',

        background: '#fff'
    },
};

const Router = () => {
    return (
        <NavigationContainer theme={Theme}>
            <AppRoute />
        </NavigationContainer>
    )
}

export default Router
