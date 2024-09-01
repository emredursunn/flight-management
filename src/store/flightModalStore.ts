import { create } from "zustand";
import { Flight } from "../types/Flight";

interface FlightModalStoreState {
  isModalOpen: boolean;
  selectedFlight: Flight | null;
  openModal: () => void;
  closeModal: () => void;
  setSelectedFlight: (flight: Flight) => void;
}

export const useFlightModalStore = create<FlightModalStoreState>((set) => ({
  isModalOpen: false,
  selectedFlight: null,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  setSelectedFlight: (flight: Flight) => set({ selectedFlight: flight }),
}));
