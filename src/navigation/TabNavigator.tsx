import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FlightsPage from "../screens/FlightsPage";

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Flights" component={FlightsPage} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
