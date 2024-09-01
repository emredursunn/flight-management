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
