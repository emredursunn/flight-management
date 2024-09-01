import { create } from "zustand";
import { generateRandomFlightAsync } from "../utils/helpers";
import { Flight } from "../types/Flight";

interface FlightStoreState {
  flights: Flight[];
  removeFlight: (code: string) => void;
  addFlightAsync: () => void;
}

export const useFlightStore = create<FlightStoreState>((set) => ({
  flights: [],
  removeFlight: (code) =>
    set((state) => ({
      flights: state.flights.filter((flight) => flight.code !== code),
    })),
  addFlightAsync: () => {
    generateRandomFlightAsync().then((flight) => {
      set((state) => ({
        flights: [...state.flights, flight],
      }));
    });
  },
}));
