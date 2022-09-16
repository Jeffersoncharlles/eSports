import { useRef, useEffect } from 'react';
import { StatusBar } from "react-native";
import { Subscription } from 'expo-modules-core';
import { Background } from "./src/components/Background";
import { useFonts, Inter_900Black, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Loading } from "./src/components/Loading";
import { GameProvider } from "./src/context/GameContext";
import { Routes } from "./src/routes";

import './src/service/notificationConfigs'
import { getPushNotificationToken } from './src/service/getPushNotificationToken';


import * as Notifications from 'expo-notifications';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_600SemiBold,
    Inter_900Black,
  });

  const getNotificationListener = useRef<Subscription>();//enviar a notificação
  const responseNotificationListener = useRef<Subscription>();//clicar e ir direto para o app

  useEffect(() => {
    getPushNotificationToken()
  }, [])

  useEffect(() => {
    //escutando quando chega
    getNotificationListener.current = Notifications
      .addNotificationReceivedListener(notification => {
        console.log(notification)
      })


    //escutando quando clica
    responseNotificationListener.current = Notifications
      .addNotificationResponseReceivedListener(response => {
        console.log(response)
      })

    //sempre que tiver método que escuta fazer um destroy
    return () => {
      if (getNotificationListener.current && responseNotificationListener.current) {
        Notifications.removeNotificationSubscription(getNotificationListener.current)
        Notifications.removeNotificationSubscription(responseNotificationListener.current)
      }
    }
  }, [])

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
