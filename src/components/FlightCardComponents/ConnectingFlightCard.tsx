import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardContainer from "./CardContainer";
import { Flight } from "../../types/Flight";
import FlightCardContent from "./FlightCardContent";
import COLORS from "../../constants/colors";

type Props = {
  flight: Flight;
};

const ConnectingFlightCard = ({ flight }: Props) => {
  return (
    <CardContainer>
      {flight.connections.map((connection) => (
        <View>
          <FlightCardContent flight={connection} />
          <View
            style={{
              width: "90%",
              alignSelf:'center',
              borderWidth: 0.5,
              borderColor: COLORS.gray[200],
            }}
          />
        </View>
      ))}
    </CardContainer>
  );
};

export default ConnectingFlightCard;

const styles = StyleSheet.create({});
