import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { flights } from '../utils/flights'
import FlightCard from '../components/FlightCardComponents/FlightCard'

const FlightsPage = () => {
  return (
    <View style={{padding:16,gap:16}}>
      <FlatList contentContainerStyle={{gap:16}} data={flights} renderItem={({item}) => <FlightCard key={item.code} flight={item}/>}/>
    </View>
  )
}

export default FlightsPage

const styles = StyleSheet.create({})