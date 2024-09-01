import { StyleSheet, View } from "react-native";
import React from "react";
import { Connection, Flight, FlightStatus } from "../../types/Flight";
import PlaneInfo from "./PlaneInfo";
import FlightInfo from "./FlightInfo";
import PlaneIcon from "./PlaneIcon";
import COLORS from "../../constants/colors";

type Props = {
  flight: Flight | Connection;
};

const FlightCardContent = ({ flight }: Props) => {
  return (
    <>
      <View style={{ gap: 16, padding: 16,backgroundColor:COLORS.white }}>
        {/* PLANE INFO AND FLIGHT DURATION */}
        <PlaneInfo flight={flight} />

        {/* DEPARTURE AND ARRIVAL INFO */}
        <View style={{ flexDirection: "row", width: "100%" }}>
          {/* DEPARTURE */}
          <FlightInfo
            status={FlightStatus.DEPARTURE}
            dateTime={flight.departureDateTime}
            place={flight.from}
          />

          {/* PLANE ICON */}
          <PlaneIcon />

          {/* ARRIVAL */}
          <FlightInfo
            status={FlightStatus.ARRIVAL}
            dateTime={flight.arrivalDateTime}
            place={flight.to}
          />
        </View>
      </View>

      {/* TICKET LEFT BLANK SHAPE */}
      <View style={[styles.blankShapeContainer, { left: 0 }]}>
        <View style={[styles.blankShape, { left: -8 }]} />
      </View>

      {/* TICKET RIGHT BLANK SHAPE */}
      <View style={[styles.blankShapeContainer, { right: 0 }]}>
        <View style={[styles.blankShape, { right: -8 }]} />
      </View>
    </>
  );
};

export default FlightCardContent;

const styles = StyleSheet.create({
  blankShapeContainer: {
    position: "absolute",
    top: "50%",
    width: 18,
    height: 16,
    borderWidth: 0.5,
    borderColor: COLORS.white,
    backgroundColor: COLORS.white,
  },
  blankShape: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: COLORS.gray[200],
  },
});
