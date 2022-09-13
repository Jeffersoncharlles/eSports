import { FlatList, Image, View } from 'react-native';
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { Card } from '../../components/Card';

import { GAMES } from '../../utils/games'

export const Home = () => {

    return (
        <View style={styles.container}>
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
                data={GAMES}
                keyExtractor={item => item.id}
                horizontal
                renderItem={({ item }) => (
                    <Card
                        data={item}
                    />
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}
