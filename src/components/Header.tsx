import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TYPOGRAPHY } from '../constants/typography'
import { COLORS } from '../constants/colors'

type Props = {
    addFlight: () => void
}

const Header = ({addFlight}:Props) => {
  return (
    <View style={{width:'100%', height:'auto',flexDirection:'row', justifyContent:'space-between', paddingTop:3, paddingHorizontal:16, paddingBottom:8}}>
      <Text style={TYPOGRAPHY.largeTitleBold}>Flights</Text>
      <TouchableOpacity onPress={addFlight} style={{width:24,height:24, alignSelf:'center'}}>
        <Image source={require('../../assets/horizontal_line.png')} style={{position:'absolute',width:14,top:12,left:5,borderWidth:2,borderColor:COLORS.gray[900]}}/>
        <Image source={require('../../assets/vertical_line.png')} style={{position:'absolute',height:14,top:7,left:10,borderWidth:2, borderColor:COLORS.gray[900]}}/>
      </TouchableOpacity>
    </View>
  )
}


export default Header

const styles = StyleSheet.create({})