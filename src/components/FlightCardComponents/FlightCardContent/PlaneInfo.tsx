import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Connection, Flight } from '../../../types/Flight'
import { TYPOGRAPHY } from '../../../constants/typography'
import COLORS from '../../../constants/colors'
import { calculateFlightDuration } from '../../../utils/helpers'

type Props = {
    flight:Flight | Connection
}

const PlaneInfo = ({flight}:Props) => {
  return (
    <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems:'center'
        }}
      >
        <View style={{ gap: 8, flexDirection: "row",alignItems:'center' }}>
          <Image source={flight.plane.logo} style={{ width: 24, height: 24 }} />
          <Text style={TYPOGRAPHY.footnoteSemibold}>
            {flight.plane.code + "-" + flight.code + " - " + flight.plane.name}
          </Text>
        </View>
        <View style={styles.flightDurationBox}>
          <Text
            style={[TYPOGRAPHY.caption1Medium, { color: COLORS.orange[700] }]}
          >
            {calculateFlightDuration(flight.departureDateTime,flight.arrivalDateTime)}
          </Text>
        </View>
      </View>
  )
}

export default PlaneInfo

const styles = StyleSheet.create({
    flightDurationBox: {
        borderRadius: 7,
        borderWidth: 0.5,
        paddingVertical: 4,
        paddingHorizontal: 10,
        gap: 10,
        backgroundColor: COLORS.orange[50],
        borderColor: COLORS.orange[200],
      },
})