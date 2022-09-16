import { FlatList, Image, } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { Card } from '../../components/Card';
import { GameProps, useGame } from '../../context/GameContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';

export const Home = () => {
    const { games } = useGame()
    const navigation = useNavigation()

    const handleOpenGame = ({ bannerUrl, id, title }: GameProps) => {
        navigation.navigate('game', { bannerUrl, id, title })
    }

    return (
        <Background>
            <SafeAreaView style={styles.container}>
                <Image
                    source={logoImg}
                    style={styles.logo}

                />
                <Heading
                    title='Encontre seu duo!'
                    subtitle='Selecione o game que deseja jogar...'
                />


                <FlatList
                    contentContainerStyle={styles.contentList}
                    data={games}
                    keyExtractor={item => item.id}
                    horizontal
                    renderItem={({ item }) => (
                        <Card
                            data={item}
                            onPress={() => handleOpenGame(item)}
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
        </Background>
    );
}
