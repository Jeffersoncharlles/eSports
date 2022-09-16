
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';

import { GameParams } from '../../@types/navigation';
import { Background } from '../../components/Background';
import { styles } from './styles';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { DouCard } from '../../components/DouCard';
import { useGame } from '../../context/GameContext';
import { useEffect, useState } from 'react';
import { ModalMatch } from '../../components/ModalMatch';


export const Game = () => {
    const { getListGameAds, gameAds, clearDiscordSelect, discordDuoSelected, getDiscordUser } = useGame()
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

                <FlatList
                    style={styles.contentContainer}
                    data={gameAds}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <DouCard data={item} onConnect={() => getDiscordUser(item.id)} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={[gameAds.length > 0 ? styles.contentList : { flex: 1, alignItems: 'center', justifyContent: 'center' }]}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyListText}>
                            Não há anúncios publicados ainda...
                        </Text>
                    )}
                />
                <ModalMatch
                    visible={discordDuoSelected.length > 0}
                    discord={discordDuoSelected}
                    onClose={clearDiscordSelect}
                />

            </SafeAreaView>
        </Background>
    );
}
