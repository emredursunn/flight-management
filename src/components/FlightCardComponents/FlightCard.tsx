import { TouchableOpacity } from "react-native";
import { Flight } from "../../types/Flight";
import ConnectingFlightCard from "./ConnectingFlightCard";
import DirectFlightCard from "./DirectFlightCard";

type Props = {
  flight: Flight;
};

const FlightCard = ({ flight }: Props) => {
  return (
    <TouchableOpacity>
      {flight.connections.length > 0 ? (
        <ConnectingFlightCard flight={flight} />
      ) : (
        <DirectFlightCard flight={flight} />
      )}
    </TouchableOpacity>
  );
};

export default FlightCard;

