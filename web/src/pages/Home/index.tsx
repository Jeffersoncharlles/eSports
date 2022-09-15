import styles from './styles.module.css'
import LogoSVG from '../../assets/Logo.svg'
import { Box } from '../../components/Box';
import { MagnifyingGlassPlus } from 'phosphor-react';
import { Card } from '../../components/Card';
import { useGame } from '../../context/GameContext';
import { useState } from 'react';

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

            <div className={styles.cardBoxWrapperGradient}>
                <div className={styles.carBoxContainer}>
                    <Box />

                    <button className={styles.buttonPublish}>
                        <MagnifyingGlassPlus size={24} />
                        Publicar anúncio
                    </button>
                </div>
            </div>
        </div>
    );
}
