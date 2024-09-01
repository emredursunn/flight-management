import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FlightsPage from "../screens/FlightsPage";
import ProfilePage from "../screens/ProfilePage";
import PlansPage from "../screens/PlansPage";
import { Image } from "react-native";
import COLORS from "../constants/colors";

export type TabParams = {
  Flights: undefined;
  Plans: undefined;
  Me: undefined;
};

const Tab = createBottomTabNavigator<TabParams>();

export const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Flights"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0.5,
          borderTopColor: COLORS.gray[200],
          marginBottom:34,
          shadowColor:COLORS.white,
        },
        tabBarActiveTintColor: COLORS.gray[900],
        tabBarInactiveTintColor: COLORS.gray[500],
        tabBarLabelStyle: {
          fontSize: 10,
          lineHeight: 12,
          textAlign: 'center',
          alignSelf: 'center',
        },
      }}
    >
      <Tab.Screen
        name="Plans"
        component={PlansPage}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require("../../assets/Calendar-Heart.png")}
              style={{
                width: 18.95,
                height: 18.95,
                tintColor:focused ? COLORS.gray[900] : undefined
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Flights"
        component={FlightsPage}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require("../../assets/BottomTabPlane.png")}
              style={{
                width: 18.95,
                height: 18.95,
                tintColor:focused ? COLORS.gray[900] : undefined
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Me"
        component={ProfilePage}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require("../../assets/User.png")}
              style={{
                width: 18.95,
                height: 18.95,
                tintColor:focused ? COLORS.gray[900] : undefined
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
