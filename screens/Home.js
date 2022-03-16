import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderTabs from '../componnents/HeaderTabs'
import { SafeAreaView } from 'react-native-web'

export default function Home() {
  return (
    <SafeAreaView>
      <HeaderTabs/>
    </SafeAreaView>
  )
}