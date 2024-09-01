import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TYPOGRAPHY } from "../../constants/typography";
import COLORS from "../../constants/colors";
import { FlightStatus } from "../../types/Flight";
import { formatDate, formatTime } from "../../utils/helpers";

type Props = {
  status: FlightStatus;
  dateTime:Date,
  place: string;
};

const FlightInfo = ({ dateTime, place, status }: Props) => {
  return (
    <View style={{gap:8}}>
      <View style={{ flexDirection: "row", gap: 4 }}>
        <Image
          source={
            status === FlightStatus.DEPARTURE
              ? require("../../../assets/Takeoff.png")
              : require("../../../assets/Landing.png")
          }
          style={{ width: 20, height: 20 }}
        />
        <Text style={[TYPOGRAPHY.footnoteRegular, { color: COLORS.gray[500] }]}>
          {formatDate(dateTime)}
        </Text>
      </View>
      <Text
        style={[
          TYPOGRAPHY.title3Semibold,
          {
            color: COLORS.gray[900],
            textAlign: status === FlightStatus.DEPARTURE ? "left" : "right",
          },
        ]}
      >
        {place}
      </Text>
      <Text
        style={[
          TYPOGRAPHY.footnoteSemibold,
          {
            color: COLORS.gray[700],
            textAlign: status === FlightStatus.DEPARTURE ? "left" : "right",
          },
        ]}
      >
        {formatTime(dateTime)}
      </Text>
    </View>
  );
};

export default FlightInfo;

const styles = StyleSheet.create({});
