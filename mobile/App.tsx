import { StatusBar } from "react-native";
import { Background } from "./src/components/Background";

import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';


import { Loading } from "./src/components/Loading";
import { GameProvider } from "./src/context/GameContext";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_900Black,
  });

  return (
    <GameProvider>
      <Background>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </Background>
    </GameProvider>
  );
}
