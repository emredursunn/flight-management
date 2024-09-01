import { TouchableOpacity } from "react-native";
import { Flight } from "../../types/Flight";
import ConnectingFlightCard from "./ConnectingFlightCard";
import DirectFlightCard from "./DirectFlightCard";
import { useFlightModalStore } from "../../store/flightModalStore";
import COLORS from "../../constants/colors";

type Props = {
  flight: Flight;
  disabled?:boolean
};

const FlightCard = ({ flight, disabled }: Props) => {

    const { openModal, setSelectedFlight } = useFlightModalStore();

    const handleOnPress = () => {
        setSelectedFlight(flight)
        openModal()
    }

  return (
    <TouchableOpacity onPress={handleOnPress} disabled={disabled}>
      {flight.connections.length > 0 ? (
        <ConnectingFlightCard flight={flight} />
      ) : (
        <DirectFlightCard flight={flight} />
      )}
    </TouchableOpacity>
  );
};

export default FlightCard;

