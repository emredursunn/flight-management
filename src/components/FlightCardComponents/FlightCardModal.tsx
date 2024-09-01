import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import FlightCard from "./FlightCard";
import { useFlightModalStore } from "../../store/flightModalStore";
import COLORS from "../../constants/colors";
import { TYPOGRAPHY } from "../../constants/typography";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import { useFlightStore } from "../../store/flightStore";
import Animated, { FadeOutDown, SlideInDown } from "react-native-reanimated";

export const FlightCardModal = () => {
  const { isModalOpen, closeModal, selectedFlight } = useFlightModalStore();
  const { removeFlight } = useFlightStore();

  const handleRemove = () => {
    if (selectedFlight) {
      removeFlight(selectedFlight.code);
      closeModal();
    }
  };

  return (
    <Modal
      visible={isModalOpen}
      transparent={true}
      animationType="slide"
      onRequestClose={closeModal}
      statusBarTranslucent={true}
    >
      <TouchableWithoutFeedback
        onPress={closeModal}
        style={[styles.outerOverlay]}
      >
        <BlurView
          experimentalBlurMethod="dimezisBlurView"
          tint="dark"
          intensity={10}
          style={styles.blurView}
        >
          <View style={styles.innerOverlay}>
            <StatusBar backgroundColor="transparent" />
            {selectedFlight && (
              <Animated.View
                entering={SlideInDown.duration(800)}
                exiting={FadeOutDown.duration(800)}
                style={{ width:'100%',gap: 16 }}
              >
                <FlightCard flight={selectedFlight} disabled={true} />
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={handleRemove}
                >
                  <Text
                    style={[
                      TYPOGRAPHY.bodySemibold,
                      { color: COLORS.red[900] },
                    ]}
                  >
                    Remove Flight
                  </Text>
                </TouchableOpacity>
              </Animated.View>
            )}
          </View>
        </BlurView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  innerOverlay: {
    flex: 1,
    backgroundColor: COLORS.blurOverlay,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    padding: 16,
  },
  outerOverlay: {
    flex: 1,
    backgroundColor: COLORS.blurOverlay,
  },
  blurView: {
    flex: 1,
  },
  removeButton: {
    width: "100%",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 20,
    gap: 10,
    backgroundColor: COLORS.red[100],
  },
});
