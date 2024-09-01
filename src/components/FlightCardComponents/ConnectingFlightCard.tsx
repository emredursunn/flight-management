import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CardContainer from "./CardContainer";
import { Flight } from "../../types/Flight";
import FlightCardContent from "./FlightCardContent/FlightCardContent";
import COLORS from "../../constants/colors";

type Props = {
  flight: Flight;
  disabled?:boolean
};

const ConnectingFlightCard = ({ flight,disabled }: Props) => {
  return (
    <CardContainer>
      {flight.connections.map((connection, index, arr) => (
        <View key={connection.code}>
          <FlightCardContent flight={connection} disabled={disabled} />
          {index === arr.length - 1 ? undefined : (
            <View
              style={{
                width: "90%",
                alignSelf: "center",
                borderWidth: 0.5,
                borderColor: COLORS.gray[200],
              }}
            />
          )}
        </View>
      ))}
    </CardContainer>
  );
};

export default ConnectingFlightCard;

