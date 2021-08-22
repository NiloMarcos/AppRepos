import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { useFonts } from "expo-font";
import { Arimo_400Regular, Arimo_700Bold } from "@expo-google-fonts/arimo";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fonstLoaded] = useFonts({
    Arimo_400Regular,
    Arimo_700Bold,
  });

  if (!fonstLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );
  }
}
