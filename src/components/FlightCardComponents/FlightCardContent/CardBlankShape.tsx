import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../../../constants/colors'
import { useFlightModalStore } from '../../../store/flightModalStore'

type Props = {
  disabled?:boolean
}

const CardBlankShape = ({disabled}:Props) => {
    const {isModalOpen} = useFlightModalStore()
  return (
    <>
    {/* TICKET LEFT BLANK SHAPE */}
    <View style={[styles.blankShapeContainer, { left: -1, }]}>
    <View style={[styles.blankShape, { left: -8, backgroundColor: isModalOpen && disabled == true  ? COLORS.blurBlankShapeColor : COLORS.white }]} />
  </View>

  {/* TICKET RIGHT BLANK SHAPE */}
  <View style={[styles.blankShapeContainer, { right: -1 }]}>
    <View style={[styles.blankShape, { right: -8, backgroundColor: isModalOpen && disabled ? COLORS.blurBlankShapeColor : COLORS.white  }]} />
  </View>
    </>
  )
}

export default CardBlankShape

const styles = StyleSheet.create({
    blankShapeContainer: {
        position: "absolute",
        top: "50%",
        width: 18,
        height: 16,
        borderColor: COLORS.white,
        overflow:'hidden',
      },
      blankShape: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: COLORS.gray[200],
      },
})