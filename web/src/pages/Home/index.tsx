import styles from './styles.module.css'
import LogoSVG from '../../assets/Logo.svg'
import { Box } from '../../components/Box';
import { MagnifyingGlassPlus } from 'phosphor-react';
import { Card } from '../../components/Card';
import { useGame } from '../../context/GameContext';
import * as Dialog from '@radix-ui/react-dialog'
import { ModalAd } from '../../components/ModalAd';

export const Home = () => {
    const { games, isLoading } = useGame()

    return (
        <div className={styles.container}>
            <img src={LogoSVG} alt="" />
            <h1 className={styles.title}>Seu <span> duo</span> está aqui.</h1>

            {isLoading && (
                <div className={styles.cardContainer}>
                    {games.map((item) => (
                        <Card key={item.id} game={item} />
                    ))}
                </div>
            )}

            <Dialog.Root>
                <div className={styles.cardBoxWrapperGradient}>
                    <div className={styles.carBoxContainer}>
                        <Box />
                        <Dialog.Trigger type='button' className={styles.buttonPublish}>
                            <MagnifyingGlassPlus size={24} />
                            Publicar anúncio
                        </Dialog.Trigger>
                    </div>
                </div>


                <ModalAd />
            </Dialog.Root>
        </div>
    );
}
