import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const List = ({selectedMeal}) => {
  return (
    <View style={styles.listItem}>
      {selectedMeal?.map((ingredient) => {
                return <Text style={styles.itemText} key={ingredient}>{ingredient}</Text>
            })}
    </View>
  )
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    itemText: {
        color: 'white',
        textAlign: 'center'
    }
})