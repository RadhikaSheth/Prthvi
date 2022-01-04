import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InitConsent from './src/screens/InitConsent'
import CompleteConsent from './src/screens/CompleteConsent'
import StartScreen from './src/screens/StartScreen'
import { CustomBottomNav } from "./CustomNavigation";
const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="InitConsent" component={InitConsent} />
          <Stack.Screen name="CompleteConsent" component={CompleteConsent} />
          <Stack.Screen name="CustomBottomNav" component={CustomBottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
