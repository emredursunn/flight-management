import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import FlightCard from "../components/FlightCardComponents/FlightCard";
import Header from "../components/Header";
import COLORS from "../constants/colors";
import { FlightCardModal } from "../components/FlightCardComponents/FlightCardModal";
import { StatusBar } from "expo-status-bar";
import { useFlightStore } from "../store/flightStore";
import EmptyPage from "../components/EmptyPage";

const FlightsPage = () => {

  const {flights} = useFlightStore()

  return (
    <View style={{ flex: 1}}>
      <View style={{flex:1,backgroundColor: COLORS.white,paddingTop: 59 }}>
        <StatusBar backgroundColor="transparent" />
        <Header />
        <View style={{ flex:1,padding: 16, paddingBottom:0, gap: 16 }}>
          <FlatList
            contentContainerStyle={{ flexGrow:1,gap: 16 }}
            data={flights}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <FlightCard flight={item} />
            )}
            ListEmptyComponent={<EmptyPage/>}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
      <FlightCardModal />
    </View>
  );
};

export default FlightsPage;

const styles = StyleSheet.create({});
