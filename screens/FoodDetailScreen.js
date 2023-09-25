import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { MEALS } from '../data/DummyData';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';

const FoodDetailScreen = ({navigation}) => {
    const route = useRoute()
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id == mealId);
    const handleButtonPressHandler = () => {
        console.log("pressed")
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="brown" onPress={handleButtonPressHandler}/>
            }
        })
    },[navigation, handleButtonPressHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal?.title}</Text>
            <View style={styles.subtitleContainer}>
                <MealDetails otherData={selectedMeal} textStyle={styles.detailText} />
            </View>
            <View style={styles.outerListContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List selectedMeal={selectedMeal?.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List selectedMeal={selectedMeal?.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default FoodDetailScreen;

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center'
    },
    detailText: {
        color: 'black'
    },
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        margin: 4,
        marginHorizontal: 24
    },
    listContainer: {
        width: '80%'
    },
    outerListContainer:{
        alignItems: 'center'
    }
})