import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, ImageBackground, ImageSourcePropType, TouchableOpacityProps, Text } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

export interface GameCardProps {
    id: string
    name: string
    ads: string
    cover: ImageSourcePropType
}

interface Props extends TouchableOpacityProps {
    data: GameCardProps
}

export const Card = ({ data, ...rest }: Props) => {

    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <ImageBackground
                source={data.cover}
                style={styles.cover}
            >
                <LinearGradient
                    colors={THEME.COLORS.FOOTER}
                    style={styles.footer}
                >
                    <Text style={styles.name}>
                        {data.name}
                    </Text>
                    <Text style={styles.ads}>
                        {data.ads} anúncios
                    </Text>

                </LinearGradient>
            </ImageBackground>
        </TouchableOpacity>
    );
}
