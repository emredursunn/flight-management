import { StyleSheet } from "react-native";
import React from "react";
import { Flight } from "../../types/Flight";

import CardContainer from "./CardContainer";
import FlightCardContent from "./FlightCardContent";

type Props = {
  flight: Flight;
};

const DirectFlightCard = ({flight}:Props) => {
  return (
    <CardContainer>
      <FlightCardContent flight={flight} />
    </CardContainer>
  );
};

export default DirectFlightCard;

const styles = StyleSheet.create({});
