import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

const foods = [
    {
        title: "Lasagna",
        description: "Served with butter lettuce, tomato and sauce bechamel.",
        price: "$13.50",
        image: "https://www.cookingclassy.com/wp-content/uploads/2013/03/lasagna15.jpg",
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderloin chicken off the bone, with a spicy sauce and a touch of cream.",
        price: "$19.20",
        image: "https://veenaazmanov.com/wp-content/uploads/2021/04/Easy-Tandoori-Chicken-Recipe-11.jpg",
    },
    {
        title: "Chilaquiles",
        description: "Chilaquiles are a Mexican dish made with flour tortillas, a filling of ground beef, and a variety of other ingredients.",
        price: "$14.50",
        image: "https://img.taste.com.au/p1e9wwJq/taste/2018/02/breakfast-chilaquiles-135402-1.jpg",
    },
    {
        title: "Salad",
        description: "Fresh garden salad with tomatoes, cucumbers, and fresh herbs.",
        price: "$10.50",
        image: "https://www.thespruceeats.com/thmb/r83ZPDHz-iy2VjRJMAf6ya3S-7A=/2500x1406/smart/filters:no_upscale()/perfectgreensalad2500-5993ab28c412440011db26df.jpg",
    },{
        title: "Lasagna",
        description: "Served with butter lettuce, tomato and sauce bechamel.",
        price: "$13.50",
        image: "https://www.cookingclassy.com/wp-content/uploads/2013/03/lasagna15.jpg",
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderloin chicken off the bone, with a spicy sauce and a touch of cream.",
        price: "$19.20",
        image: "https://veenaazmanov.com/wp-content/uploads/2021/04/Easy-Tandoori-Chicken-Recipe-11.jpg",
    },
    {
        title: "Chilaquiles",
        description: "Chilaquiles are a Mexican dish made with flour tortillas, a filling of ground beef, and a variety of other ingredients.",
        price: "$14.50",
        image: "https://img.taste.com.au/p1e9wwJq/taste/2018/02/breakfast-chilaquiles-135402-1.jpg",
    },
    {
        title: "Salad",
        description: "Fresh garden salad with tomatoes, cucumbers, and fresh herbs.",
        price: "$10.50",
        image: "https://www.thespruceeats.com/thmb/r83ZPDHz-iy2VjRJMAf6ya3S-7A=/2500x1406/smart/filters:no_upscale()/perfectgreensalad2500-5993ab28c412440011db26df.jpg",
    },{
        title: "Lasagna",
        description: "Served with butter lettuce, tomato and sauce bechamel.",
        price: "$13.50",
        image: "https://www.cookingclassy.com/wp-content/uploads/2013/03/lasagna15.jpg",
    },
    {
        title: "Tandoori Chicken",
        description: "Amazing Indian dish with tenderloin chicken off the bone, with a spicy sauce and a touch of cream.",
        price: "$19.20",
        image: "https://veenaazmanov.com/wp-content/uploads/2021/04/Easy-Tandoori-Chicken-Recipe-11.jpg",
    },
    {
        title: "Chilaquiles",
        description: "Chilaquiles are a Mexican dish made with flour tortillas, a filling of ground beef, and a variety of other ingredients.",
        price: "$14.50",
        image: "https://img.taste.com.au/p1e9wwJq/taste/2018/02/breakfast-chilaquiles-135402-1.jpg",
    },
    {
        title: "Salad",
        description: "Fresh garden salad with tomatoes, cucumbers, and fresh herbs.",
        price: "$10.50",
        image: "https://www.thespruceeats.com/thmb/r83ZPDHz-iy2VjRJMAf6ya3S-7A=/2500x1406/smart/filters:no_upscale()/perfectgreensalad2500-5993ab28c412440011db26df.jpg",
    },
]
const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: 'bold',
    },
})

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>  
        {foods.map((food, index) => (
            <View key={index}>
                <View style={styles.menuItemStyle}>
                    <BouncyCheckbox
                        iconStyle={{borderColor: "lightgray", borderRadius: 0}}
                        fillColor="green"
                    />
                    <FoodInfo food={food}/>
                    <FoodImage food={food}/>
                </View>
                <Divider width={2} orientation="vertical" style={{marginHorizontal: 20}} />
            </View>
        ))}
    </ScrollView>
  )
}


const FoodInfo = (props) => (
    <View style={{width: 240, justifyContent: "space-evenly"}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image 
            source={{uri: props.food.image}} 
            style={{width: 100, height: 100, borderRadius: 8}}/>
    </View>
)
