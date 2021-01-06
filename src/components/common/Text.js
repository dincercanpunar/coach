import React from 'react'
import { StyleSheet, Text as RNText } from 'react-native'
import { useTheme } from '@react-navigation/native';
import PropTypes from 'prop-types';

const Text = ({ extraStyle, children, size, weight, muted }) => {
    const { colors } = useTheme();
    return (
        <RNText 
            style={[
                extraStyle,
                styles[size], 
                styles[weight], 
                {
                    color: muted ? colors.textMuted : colors.text
                }
            ]}
        >
            {children}
        </RNText>
    )
}

Text.defaultProps = {
    size: 'm',
    weight: 'normal'
}

Text.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl', 'xxl']),
    weight: PropTypes.oneOf(['lighter', 'light', 'normal', 'bold', 'bolder', 'boldest'])
}

export default Text

const styles = StyleSheet.create({
    xs: {
        fontSize: 12
    },
    s: {
        fontSize: 14
    },
    m: {
        fontSize: 16
    },
    l: {
        fontSize: 20
    },
    xl: {
        fontSize: 24
    },
    xxl: {
        fontSize: 48
    },

    lighter: {
        fontWeight: '100'
    },
    light: {
        fontWeight: '300'
    },
    normal: {
        fontWeight: '400'
    },
    bold: {
        fontWeight: '500'
    },
    bolder: {
        fontWeight: '600'
    },
    boldest: {
        fontWeight: '700'
    },
})
