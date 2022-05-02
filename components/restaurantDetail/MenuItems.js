import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

const foods = [
    {
        title: "Gyoza",
        description: "Beef Fried dumpling, 6 pieces.",
        price: "$6.85",
        image: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1_3eoiuRq2fXuCd9qyptrNpdRPjzEOBYjg&usqp=CAU",

    },

    {
        title: "Poke Salad",
        description: "Deep-fried jalapeno with spicy tuna and cream cheese",
        price: "$14.30",
        image: 
        "https://s3-media0.fl.yelpcdn.com/bphoto/95WwIf1JZxMzs1WePA9LVg/180s.jpg",

    },
    {
        title: "Rainbow Roll",
        description: "Assorted fish on cali.",
        price: "$16.00",
        image: 
        "https://s3-media0.fl.yelpcdn.com/bphoto/XeIYrnYyV9bwFq86xq5MUw/180s.jpg",

    },
    {
        title: "Rainbow Roll",
        description: "Assorted fish on cali.",
        price: "$16.00",
        image: 
        "https://s3-media0.fl.yelpcdn.com/bphoto/XeIYrnYyV9bwFq86xq5MUw/180s.jpg",

    },
    {
        title: "Rainbow Roll",
        description: "Assorted fish on cali.",
        price: "$16.00",
        image: 
        "https://s3-media0.fl.yelpcdn.com/bphoto/XeIYrnYyV9bwFq86xq5MUw/180s.jpg",

    },
    {
        title: "Rainbow Roll",
        description: "Assorted fish on cali.",
        price: "$16.00",
        image: 
        "https://s3-media0.fl.yelpcdn.com/bphoto/XeIYrnYyV9bwFq86xq5MUw/180s.jpg",

    },
    {
        title: "Rainbow Roll",
        description: "Assorted fish on cali.",
        price: "$16.00",
        image: 
        "https://s3-media0.fl.yelpcdn.com/bphoto/XeIYrnYyV9bwFq86xq5MUw/180s.jpg",

    },
    {
        title: "Rainbow Roll",
        description: "Assorted fish on cali.",
        price: "$16.00",
        image: 
        "https://s3-media0.fl.yelpcdn.com/bphoto/XeIYrnYyV9bwFq86xq5MUw/180s.jpg",

    },
    {
        title: "Rainbow Roll",
        description: "Assorted fish on cali.",
        price: "$16.00",
        image: 
        "https://s3-media0.fl.yelpcdn.com/bphoto/XeIYrnYyV9bwFq86xq5MUw/180s.jpg",

    },
    {
        title: "Rainbow Roll",
        description: "Assorted fish on cali.",
        price: "$16.00",
        image: 
        "https://s3-media0.fl.yelpcdn.com/bphoto/XeIYrnYyV9bwFq86xq5MUw/180s.jpg",

    },
];



const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "bold",

    }
});

export default function MenuItems({restaurantName}) {
const dispatch = useDispatch();

const selectItem = (item,checkboxValue) => 
    dispatch({
        type: "ADD_TO_CART",
        payload: {
            ...item, 
            restaurantName: restaurantName,
            checkboxValue: checkboxValue,
        },
      });

      const cartItems = useSelector(
          (state) => state.cartReducer.selectedItems.items
          );

      const isFoodInCart = (food,cartItems) => 
        Boolean(cartItems.find((item) => item.title == food.title));
      

  return (
<ScrollView showsVerticalScrollIndicator={false}> 
    {foods.map((food, index) => (
    <View key={index}>
      <View style={styles.menuItemStyle}>
      {/* <Text>Menu Item</Text> */}
        <BouncyCheckbox 
        iconStyle={{borderColor: "gray", borderRadius: 0}}
        fillColor="green"
        onPress={(checkboxValue) => selectItem(food,checkboxValue)}
        isChecked={isFoodInCart(food,cartItems)}
        />
        <FoodInfo food={food} /> 
        <FoodImage food={food} /> 
     </View>
     <Divider
        width={0.5}
        orientation="vertical" 
        // style={{marginHorizontal: 20}}
    />
    </View>
    ))}
</ScrollView>  
);
}

const FoodInfo = (props) => (
    
    <View style= {{width: 240, justifyContent: "space-evenly"}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
    
);

const FoodImage = (props) => (
    <View>
        <Image
            source={{uri: props.food.image}}
            style={{width: 100, height: 100, borderRadius: 8}}
        />
    </View>
)