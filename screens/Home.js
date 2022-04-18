import React, {useEffect, useState} from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import BottomTabs from '../components/home/BottomTabs'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'

const YELP_API_KEY = "BuBXdvnY3Ik4SJGwrjVbQpcUkCYgseIq33gvM07lYRdw20ef8D4x3oPAR92J6nTx0Rhb11dFFzPf9weYitMTgYQXxQGf_Z_MRa4pex5e2wD6NnyLw2S78zV7wVcyYnYx";

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Fullerton");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=food&location=${city}`;  

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => 
        setRestaurantData(
          json.businesses.filter((business) => 
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      )      
  }

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{backgroundColor: "#eee", flex: 1 }}>
      <View style={{backgroundColor: "white", padding: 15}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity}/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs />
    </SafeAreaView>
  )
}
