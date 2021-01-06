import React from 'react'
import { StyleSheet, View } from 'react-native'
import {
    Text,
    Dot
} from '@/components/common'
import moment from 'moment'

const week = [
    {
        title: 'Pzt',
        number: 2,
        status: 'success'
    },
    {
        title: 'Sal',
        number: 3,
        status: 'danger'
    },
    {
        title: 'Çar',
        number: 4,
        status: 'success'
    },
    {
        title: 'Per',
        number: 5,
        status: 'success'
    },
    {
        title: 'Cum',
        number: 6,
        status: 'warning'
    },
    {
        title: 'Cmt',
        number: 7,
        status: 'primary'
    },
    {
        title: 'Paz',
        number: 8,
        status: 'none'
    },
]

const Calendar = () => {
    console.log()

    const today = moment().format('D')

    const week = getCurrentWeekDays().map((item) => ({
        title: moment(item).format('ddd'),
        number: moment(item).format('D'),
    }))

    return (
        <View style={styles.container}>
            {
                week.map((item, index) => (
                    <View key={index} style={styles.day}>
                        <Text weight="bolder" muted>{item.title}</Text>
                        <Text weight="bolder" extraStyle={{ marginBottom: 5 }}>{item.number}</Text>
                        {
                            item.number === today &&
                                <Dot />
                        }
                    </View>
                ))
            }
            
        </View>
    )
}

const getCurrentWeekDays = () => {
    const weekStart = moment().startOf('week')

    const days = []

    for (let i = 0; i <= 6; i++) {
        days.push(moment(weekStart).add(i, 'days'));
    }

    return days;
}

export default Calendar

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row'
    },
    day: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
