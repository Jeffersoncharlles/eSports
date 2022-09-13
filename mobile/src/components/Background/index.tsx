
import { ImageBackground } from 'react-native';
import { styles } from './styles';
import backgroundIMG from '../../assets/background_galaxy.png';

interface Props {
    children:React.ReactNode
}



export const Background = ({children}:Props) => {

    return(
        <ImageBackground
        source={backgroundIMG}
        defaultSource={backgroundIMG} //memoriza o valor padrão faz cache
        style={styles.container}
        >
            {children}
        </ImageBackground>
    );
}
