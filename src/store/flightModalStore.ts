import { create } from "zustand";
import { Flight } from "../types/Flight";

interface FlightModalStore {
  isModalOpen: boolean;
  selectedFlight: Flight | null;
  openModal: () => void;
  closeModal: () => void;
  setSelectedFlight: (flight: Flight) => void;
}

export const useFlightModalStore = create<FlightModalStore>((set) => ({
  isModalOpen: false,
  selectedFlight: null,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false, selectedFlight: null }),
  setSelectedFlight: (flight: Flight) => set({ selectedFlight: flight }),
}));
