import { StyleSheet, Text, View } from 'react-native'
import React, { ReactNode } from 'react'
import COLORS from '../../constants/colors'

type Props = {
    children: ReactNode
}

export const CardContainer = ({children}:Props) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default CardContainer

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 14,
        borderWidth: 0.5,
        borderColor: COLORS.gray[200],
        gap: 16,
        backgroundColor:COLORS.white
      },
})