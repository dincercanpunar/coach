import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';

const Dot = ({ type }) => {
    const { colors } = useTheme();
    return (
        <View 
            style={[
                styles.container, 
                {
                    backgroundColor: type==='none' ? colors.background : colors[type]
                }
            ]}
        ></View>
    )
}

Dot.defaultProps = {
    type: 'primary'
}

Dot.propTypes = {
    type: PropTypes.oneOf(['none', 'primary', 'success', 'danger', 'warning']),
}

export default Dot

const styles = StyleSheet.create({
    container: {
        height: 5,
        width: 5,
        borderRadius: 5
    }
})
