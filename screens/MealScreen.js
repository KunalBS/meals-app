import { View, Text, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { CATEGORIES, MEALS } from '../data/DummyData';
import MealItem from '../components/MealItem';


const MealScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem?.categoryIds.indexOf(catId) >= 0;
    });

    useLayoutEffect(() => {
        const CategoryTitle = CATEGORIES.find((category) => category.id == catId).title
        navigation.setOptions({
            title: CategoryTitle
        })
    },[navigation, catId])

    const renderMeals = (itemData) => {
        const item = itemData?.data;
        const handlePress = () => {
            navigation.navigate('FoodOverview')
        }
        const mealItem = {
            title: item?.title,
            imageUrl: item?.imageUrl,
            affordability: item?.affordability,
            complexity: item?.complexity,
            duration: item?.duration
        }
        return <MealItem title={itemData?.item?.title} imageUrl={itemData?.item?.imageUrl} otherData={itemData?.item}/>
    }
    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} renderItem={renderMeals} keyExtractor={(item, index) => item?.id} />
        </View>
    )
}

export default MealScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})