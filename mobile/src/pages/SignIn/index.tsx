import { FlatList, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import AuthSession from 'expo-auth-session'

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { Card } from '../../components/Card';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';

export const SignIn = () => {


    const handleSignIn = async () => {
        const response: any = await AuthSession.startAsync({
            authUrl: "https://discord.com/api/oauth2/authorize?client_id=1022637299395199086&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40jeffersoncharlles%2Fmobile&response_type=token&scope=identify"
        })

        fetch('https://discord.com/api/users/@me', {
            headers: {
                'authorization': `Bearer ${response.params.access_token}`
            }
        }).then(res => res.json()).then(data => console.log(data))
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={logoImg}
                    style={styles.logo}

                />
                <Heading
                    title='Entrar'
                    subtitle='Encontre o seu duo e bora jogar.'
                />

                {/* <TouchableOpacity
                     style={styles.discordButton}
                     onPress={handleCopyDiscordUser}
                     disabled={isCopping}
                >
                        <Text style={styles.discord}>
                            {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
                        </Text>

                </TouchableOpacity> */}
            </SafeAreaView>
        </Background>
    );
}
