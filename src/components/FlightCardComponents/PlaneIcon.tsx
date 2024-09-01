import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../../constants/colors'

const PlaneIcon = () => {
  return (
    <View style={{ flex: 1, alignSelf:'center', height:'auto', paddingHorizontal: 16, gap: 4 }}>
    <View
      style={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={require("../../../assets/Line.png")}
        style={{
          position: "absolute",
          width: "100%",
          borderWidth: 1,
          borderColor: COLORS.gray[200],
        }}
      />
      <Image
        source={require("../../../assets/Plane.png")}
        style={{ width: 24, height: 24 }}
      />
    </View>
  </View>

  )
}

export default PlaneIcon

const styles = StyleSheet.create({})