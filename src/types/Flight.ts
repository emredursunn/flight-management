import { Plane } from "./Plane";

export type Connection = Omit<Flight, 'connections'>

export type Flight = {
  code: string;
  from: string;
  to: string;
  departureDate: string;
  departureTime: string;
  arrivalDate: string;
  arrivalTime: string;
  plane: Plane;
  connections: Connection[];
};

export enum FlightStatus {
    ARRIVAL = "Arrival",
    DEPARTURE = "Departure"
}