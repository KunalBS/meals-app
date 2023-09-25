import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const MealDetails = ({otherData, style, textStyle}) => {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailsItem, textStyle]}>{otherData?.duration}m</Text>
            <Text style={[styles.detailsItem, textStyle]}>{otherData?.complexity}</Text>
            <Text style={[styles.detailsItem, textStyle]}>{otherData?.affordability}</Text>
        </View>
    )
}

export default MealDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 14,
    },
})