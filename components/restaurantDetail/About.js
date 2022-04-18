import { View, Text, Image } from 'react-native'
import React from 'react'

const yelpRestaurantInfo={
    name: "Omoi Sushi",
    image:
    "https://s3-media0.fl.yelpcdn.com/bphoto/tWpr1H8WHws_Sgh1Az9ZSg/o.jpg",
    price: "$$",
    reviews:"1800",
    rating: 4.6,
    categories: [{title: "Japanese"}, {title: "Sushi"}],

};



// const image = 
//     "https://s3-media0.fl.yelpcdn.com/bphoto/tWpr1H8WHws_Sgh1Az9ZSg/o.jpg"

// const title = "Omoi Sushi";
// const description = 'Japanese • Sushi • $$ • 4 ⭐ (2134+)'

export default function About(props) {
  const {name, image, price, reviews, rating,categories} = 
  props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price: ""} • ${rating} ⭐ (${reviews}+)`;  
  return (
    <View>
      {/* <Text>ABOUT</Text> */}
      <RestaurantImage image= {image} />
      <RestaurantName name={name} /> 
      <RestaurantDescription description= {description} />
    </View>
  );
}

const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={{width: "100%", height: 180}} />
);

const RestaurantName = (props) => (
<Text 
    style={{
        fontSize: 29,
        fontWeight: "bold",
        marginTop: 10,
        marginHorizontal: 15,
    }}
>
    {props.name}
</Text>
);

const RestaurantDescription = (props) => (
<Text 
    style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "bold",
        fontSize: 15.5,
    }}
> 
    {props.description}
</Text>
);
