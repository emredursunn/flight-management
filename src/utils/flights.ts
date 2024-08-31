import { Flight } from "../types/Flight";
import { planes } from "./planes";

export const flights: Flight[] = [
  {
    code: "ABC",
    from: "New York",
    to: "London",
    departureTime: "1:00 PM",
    departureDate: "20 Apr 2024",
    arrivalTime: "11:00 AM",
    arrivalDate:"24 Apr 2024",
    plane:planes[0],
    transfers: [],
  },
  {
    code: "XYZ",
    from: "San Francisco",
    to: "Berlin",
    departureTime: "1:00 PM",
    departureDate: "20 Apr 2024",
    arrivalTime: "11:00 AM",
    arrivalDate:"24 Apr 2024",
    plane:planes[0],
    transfers: [
      {
        code: "XYZ1",
        from: "San Francisco",
        to: "New York",
        departureTime: "1:00 PM",
        departureDate: " PM",
        arrivalTime: "4:00 PM",
        arrivalDate: "4:00 PM",
        plane:planes[0],
    },
      {
        code: "XYZ2",
        from: "New York",
        to: "Berlin",
        departureTime: "1:00 PM",
        departureDate: " PM",
        arrivalTime: "4:00 PM",
        arrivalDate: "4:00 PM",
        plane:planes[0],
      },
    ],
  },
];
