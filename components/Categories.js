import { View, Text } from 'react-native'
import React from 'react'
import { Image, ScrollView } from 'react-native-web';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const items =[
    {
        image: require('../assets/images/shopping-bag.png'),
        text: "Pick-up",
    },
    {
        image: require('../assets/images/soft-drink.png'),
        text: "Soft Drinks",
    },
    {
        image: require('../assets/images/bread.png'),
        text: "Bakery Items",
    },
    {
        image: require('../assets/images/fast-food.png'),
        text: "Fast Foods",
    },
    {
        image: require('../assets/images/deals.png'),
        text: "Deals",
    },
    {
        image: require('../assets/images/coffee.png'),
        text: "Coffee",
    },
    {
        image: require('../assets/images/desserts.png'),
        text: "Desserts",
    },
];

export default function Categories() {
  return (
      <View style= {{
          marginTop: 5,
          backgroundColor: "#fff",
          paddingVertical: 10,
          paddingLeft: 20,
      }}
      >
    <ScrollView horizontal showHorizontalScrollIndicator = {false}>
        {items.map((item, index) => (
        <View key={index}style={{ alignItems: "center", marginRight: 30}}>
      <Image 
        source = {item[0].image} 
        style ={{
        width: 50,
        height: 40,
        resizeMode: "contain",
        }}    
        />
         <Text style ={{ fontSize: 13, fontWeight: "900" }}>{item[0].text}Pick-up</Text>
        </View>
      ))}
    </ScrollView>
    </View>
     );
}