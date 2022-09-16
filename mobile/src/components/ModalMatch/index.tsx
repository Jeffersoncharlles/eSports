import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CheckCircle, X } from 'phosphor-react-native';
import { THEME } from '../../theme';
import { Heading } from '../Heading';
import { useState } from 'react';

interface Props extends ModalProps {
    discord: string
    onClose: () => void
}

export const ModalMatch = ({ discord, onClose, ...rest }: Props) => {
    const [isCopping, setIsCopping] = useState(false)

    const handleCopyDiscordUser = async () => {
        try {
            setIsCopping(true)
            await Clipboard.setStringAsync(discord)
            Alert.alert('Discord Copiado!', 'Usuário copiado para area de transferência')
            onClose()
            setIsCopping(false)
        } catch (error) {
            Alert.alert('error', 'Ocorreu algum erro!')
            setIsCopping(false)
        }
    }

    return (
        <Modal {...rest}
            transparent
            statusBarTranslucent
            animationType='fade'
        >
            <SafeAreaView style={styles.container}>

                <View style={styles.content}>
                    <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                        <X size={20} color={THEME.COLORS.CAPTION_500} />
                    </TouchableOpacity>

                    <CheckCircle
                        size={64}
                        color={THEME.COLORS.SUCCESS}
                        weight="bold"
                    />
                    <Heading
                        style={{ alignItems: 'center', marginTop: 24 }}
                        title='Let’s play!'
                        subtitle='Agora é só começar a jogar!'
                    />
                    <Text style={styles.label}>
                        Adicione no Discord
                    </Text>
                    <TouchableOpacity
                        style={styles.discordButton}
                        onPress={handleCopyDiscordUser}
                        disabled={isCopping}
                    >
                        <Text style={styles.discord}>
                            {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    );
}
