import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TYPOGRAPHY } from '../constants/typography'
import COLORS from '../constants/colors'
import { useFlightStore } from '../store/flightStore'

const EmptyPage = () => {
  const {addFlightAsync} = useFlightStore() 

  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center', paddingHorizontal:16, gap:24}}>
        <View style={{gap:16, width:'100%'}}>
      <View style={{padding:14,borderRadius:14,borderWidth:0.5,gap:10, alignSelf:'center'}}>
      <Image source={require('../../assets/Plane.png')} style={{width:28,height:28}}/>
      </View>
      <View style={{paddingHorizontal:16,gap:8, width:'100%'}}>
      <Text style={TYPOGRAPHY.title2Bold}>No Flights Added Yet</Text>
      <Text style={TYPOGRAPHY.bodyRegular}>Let's get started on your jet lag plan! Add your upcoming flights to begin your journey.</Text>
      </View>
        </View>
        <TouchableOpacity onPress={addFlightAsync} style={{borderRadius:14,paddingVertical:14,paddingHorizontal:20, gap:10, backgroundColor:COLORS.orange[600]}}>
            <Text style={[TYPOGRAPHY.bodySemibold, {color:COLORS.white}]}>Add Flight</Text>
        </TouchableOpacity>
    </View>
  )
}

export default EmptyPage

const styles = StyleSheet.create({})