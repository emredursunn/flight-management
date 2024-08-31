import { Plane } from "./Plane";

export type FlightLeg = Omit<Flight, 'transfers'>

export type Flight = {
  code: string;
  from: string;
  to: string;
  departureDate: string;
  departureTime: string;
  arrivalDate: string;
  arrivalTime: string;
  plane: Plane;
  transfers: FlightLeg[];
};
