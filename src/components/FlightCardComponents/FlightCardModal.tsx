import { Modal, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Flight } from '../../types/Flight'
import FlightCard from './FlightCard'
import { useFlightModalStore } from '../../store/flightModalStore'
import COLORS from '../../constants/colors'
import { TYPOGRAPHY } from '../../constants/typography'
import { BlurView } from 'expo-blur'

export const FlightCardModal = () => {
    const { isModalOpen, closeModal, selectedFlight } = useFlightModalStore();
  
    return (
      <Modal
        visible={isModalOpen}
        transparent={true}
        animationType='slide'
        onRequestClose={closeModal}
      >
        <BlurView experimentalBlurMethod='dimezisBlurView' tint='dark' intensity={10} style={{flex:1,alignItems:'center',justifyContent:'center', backgroundColor:'black',gap: 16, padding: 16}}>
       {selectedFlight && <FlightCard flight={selectedFlight} disabled/> }
       <TouchableOpacity style={{width:'100%', borderRadius:14, paddingVertical:14, paddingHorizontal:20,gap:10, backgroundColor:COLORS.red[100]}}>
        <Text style={[TYPOGRAPHY.bodySemibold, {color:COLORS.red[900]}]}>
            Remove Flight
        </Text>
       </TouchableOpacity>
        </BlurView>
      </Modal>
    )
}