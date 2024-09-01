import { StyleSheet } from "react-native";
import React from "react";
import { Flight } from "../../types/Flight";

import CardContainer from "./CardContainer";
import FlightCardContent from "./FlightCardContent/FlightCardContent";

type Props = {
  flight: Flight;
  disabled?:boolean
};

const DirectFlightCard = ({flight,disabled}:Props) => {
  return (
    <CardContainer>
      <FlightCardContent flight={flight} disabled={disabled} />
    </CardContainer>
  );
};

export default DirectFlightCard;

const styles = StyleSheet.create({});
