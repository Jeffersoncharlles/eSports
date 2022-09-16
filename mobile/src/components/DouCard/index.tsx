import { GameController } from 'phosphor-react-native';
import { TouchableOpacity, View, Text } from 'react-native';
import { GameAdsProps } from '../../context/GameContext';
import { THEME } from '../../theme';
import { DouInfo } from '../DouInfo';
import { styles } from './styles';

interface Props {
    data: GameAdsProps
    onConnect: () => void
}

export const DouCard = ({ data, onConnect }: Props) => {




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
                value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
            />
            <DouInfo
                label='Chamada de áudio?'
                value={data.useVoiceChannel ? 'sim' : 'não'}
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT}
            />

            <TouchableOpacity
                style={
                    data.useVoiceChannel ?
                        styles.button : styles.buttonDisable
                }
                disabled={!data.useVoiceChannel}
                onPress={onConnect}
            >
                <GameController
                    color={THEME.COLORS.TEXT}
                    size={20}
                />
                <Text style={styles.buttonTitle}>
                    Conectar
                </Text>

            </TouchableOpacity>
        </View>
    );
}
