import { Plane } from "./Plane";

export type Connection = Omit<Flight, 'connections'>

export type Flight = {
  code: string;
  from: string;
  to: string;
  departureDateTime: Date;
  arrivalDateTime: Date;
  plane: Plane;
  connections: Connection[];
};

export enum FlightStatus {
    ARRIVAL = "Arrival",
    DEPARTURE = "Departure"
}