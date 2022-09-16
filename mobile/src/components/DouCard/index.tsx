import { View } from 'react-native';
import { GameAdsProps } from '../../context/GameContext';
import { DouInfo } from '../DouInfo';
import { styles } from './styles';

interface Props {
    data: GameAdsProps
}

export const DouCard = ({ data }: Props) => {


    return (
        <View style={styles.container}>
            <DouInfo
                label='Nome'
                value={data.name}
            />
            <DouInfo
                label='Tempo de jogo'
                value={`${data.yearsPlaying} anos`}
            />
            <DouInfo
                label='Disponibilidade'
                value={`${data.weekDays.length} dias`}
            />
            <DouInfo
                label='Chamada de áudio?'
                value={data.useVoiceChannel ? 'sim' : 'não'}
                colorValue={"green"}
            />

        </View>
    );
}
