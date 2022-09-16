import { FlatList, Image, View } from 'react-native';
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { Card } from '../../components/Card';
import { useGame } from '../../context/GameContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';

export const Home = () => {
    const { games } = useGame()


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
                        />
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>
        </Background>
    );
}
