import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/DummyData'
import CategoryGridTile from '../components/CategoryGridTile';

const CategoryScreen = ({navigation}) => {
    const renderCategoryItem = (itemData) => {
        const handlePress = () => {
            navigation.navigate('MealsOverview',{
                categoryId: itemData?.item?.id
            })
        }
        return <CategoryGridTile title={itemData?.item?.title} color={itemData?.item?.color} onPress={handlePress }/>;
    }
  return (
    <FlatList data={CATEGORIES} 
    keyExtractor={(item, index) => {item.id}}
    renderItem = {renderCategoryItem}
    numColumns={2}
    />
  )
} 

export default CategoryScreen