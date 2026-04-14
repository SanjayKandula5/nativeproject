import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Regions from "./src/screens/Regions";
import CustomerScreen from "./src/screens/Customer";
import AllCustomers from "./src/screens/AllCustomers";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="regions" component={Regions} />
        <Stack.Screen name="customer" component={CustomerScreen} />
        <Stack.Screen name="allCustomers" component={AllCustomers} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}