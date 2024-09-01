import { Connection, Flight } from "../types/Flight";
import { Plane } from "../types/Plane";
import { addMinutes } from "date-fns";
import { arrivalCities, departureCities, intermediateCities } from "./Cities";
import { planes } from "./planes";

export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const [day, month, year] = date
    .toLocaleDateString("en-GB", options)
    .split(" ");
  return `${day} ${month} ${year}`;
};

export const formatTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = (hours % 12 || 12).toString().padStart(2, "0"); // Convert to 12-hour format and add leading zero
  const formattedMinutes = minutes.toString().padStart(2, "0"); // Add leading zero for minutes
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

export const calculateFlightDuration = (departure: Date, arrival: Date) => {
  const durationMs = arrival.getTime() - departure.getTime();
  const durationHours = Math.floor(durationMs / (1000 * 60 * 60));
  const durationMinutes = Math.floor(
    (durationMs % (1000 * 60 * 60)) / (1000 * 60)
  );
  return `${durationHours}h ${durationMinutes}m`;
};

function getRandomDate(start: Date, end: Date): Date {
  const diff = end.getTime() - start.getTime();
  const randomTime = Math.floor(Math.random() * diff) + start.getTime();
  return new Date(randomTime);
}

function generateRandomCode() {
  const code = Math.floor(Math.random() * 1000);
  return code.toString();
}

function getRandomPlane(): Plane {
  const plane = planes[Math.floor(Math.random() * planes.length)];
  return plane;
}

function generateRandomCities() {
  const from =
    departureCities[Math.floor(Math.random() * departureCities.length)];
  const intermediateCity =
    intermediateCities[Math.floor(Math.random() * intermediateCities.length)];
  const to = arrivalCities[Math.floor(Math.random() * arrivalCities.length)];

  return { from, intermediateCity, to };
}

export const generateRandomFlightAsync = (): Promise<Flight> => {
  return new Promise((resolve) => { 
    const code = generateRandomCode();
    const plane = getRandomPlane();
    const { from, intermediateCity, to } = generateRandomCities();
    const departureDateTime = getRandomDate(
      new Date(),
      addMinutes(new Date(), 10080)
    ); // up to 7 days ahead
    const arrivalDateTime = addMinutes(
      departureDateTime,
      Math.floor(Math.random() * 1440) + 60
    ); // 1 to 24 hours later

    const connections: Connection[] = [];
    const chanceOfConnectionFlight = Math.random();
    console.log(chanceOfConnectionFlight);
    if (chanceOfConnectionFlight > 0.5) {
      const firstLegDeparture = departureDateTime;
      const firstLegArrival = addMinutes(
        firstLegDeparture,
        Math.floor(Math.random() * 240) + 60
      ); // 1 to 4 hours later

      const secondLegDeparture = addMinutes(firstLegArrival, 60); // at least 1 hour layover
      const secondLegArrival = addMinutes(
        secondLegDeparture,
        Math.floor(Math.random() * 1440) + 60
      ); // 1 to 24 hours later

      connections.push({
        code: `${code} - 1`,
        from,
        to: intermediateCity,
        departureDateTime: firstLegDeparture,
        arrivalDateTime: firstLegArrival,
        plane,
      });

      connections.push({
        code: `${code} - 2`,
        from: intermediateCity,
        to,
        departureDateTime: secondLegDeparture,
        arrivalDateTime: secondLegArrival,
        plane,
      });
    }

    resolve({
      code,
      from,
      to,
      departureDateTime,
      arrivalDateTime,
      plane,
      connections,
    });
  });
};