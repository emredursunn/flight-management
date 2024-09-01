import { Flight } from "../types/Flight";
import { planes } from "./planes";

export const flights: Flight[] = [
  {
    code: "ABC",
    from: "New York",
    to: "London",
    departureDateTime: new Date("2024-04-20T13:00:00"),
    arrivalDateTime: new Date("2024-04-24T11:00:00"),
    plane: planes[0],
    connections: [],
  },
  {
    code: "XYZ",
    from: "San Francisco",
    to: "Berlin",
    departureDateTime: new Date("2024-04-20T13:00:00"),
    arrivalDateTime: new Date("2024-04-24T11:00:00"),
    plane: planes[0],
    connections: [
      {
        code: "XYZ1",
        from: "San Francisco",
        to: "New York",
        departureDateTime: new Date("2024-04-20T13:00:00"),
        arrivalDateTime: new Date("2024-04-20T16:00:00"),
        plane: planes[0],
      },
      {
        code: "XYZ2",
        from: "New York",
        to: "Berlin",
        departureDateTime: new Date("2024-04-20T18:00:00"),
        arrivalDateTime: new Date("2024-04-21T09:00:00"),
        plane: planes[0],
      },
    ],
  },
];
