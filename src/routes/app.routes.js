import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Repos from "../pages/Repos";

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Repositorios" 
        component={Repos} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
