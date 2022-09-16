
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons'
import { Image, TouchableOpacity, View } from 'react-native';

import { GameParams } from '../../@types/navigation';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { DouCard } from '../../components/DouCard';
import { useGame } from '../../context/GameContext';
import { useEffect } from 'react';


export const Game = () => {
    const { getListGameAds, gameAds } = useGame()
    const navigation = useNavigation()
    const route = useRoute()

    const game = route.params as GameParams

    const handleGoBack = () => {
        navigation.goBack()
    }

    useEffect(() => {
        getListGameAds(game.id)
    }, [])

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={handleGoBack}
                    >
                        <Entypo
                            name='chevron-thin-left'
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>
                    <Image
                        source={logoImg}
                        style={styles.logo}
                    />
                    <View style={styles.right} />
                </View>
                <Image
                    source={{ uri: game.bannerUrl }}
                    style={styles.bannerCover}
                    resizeMode="cover"
                />
                <Heading
                    title={game.title}
                    subtitle='Conecte-se e comece a jogar!'
                />

                <DouCard data={gameAds[0]} />

            </SafeAreaView>
        </Background>
    );
}
