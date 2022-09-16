import * as Notifications from 'expo-notifications';

export const getPushNotificationToken = async () => {
    const { granted } = await Notifications.getPermissionsAsync() //pegar se tem autorização de notificação

    if (!granted) {
        //nao tem pede autorização
        await Notifications.requestPermissionsAsync();
    }

    if (granted) {
        // ja tem autorização
        const pushToken = await Notifications.getExpoPushTokenAsync();
        console.log("Notificação", pushToken.data)


        return pushToken.data
    }
}
