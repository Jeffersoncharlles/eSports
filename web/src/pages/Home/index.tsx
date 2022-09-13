import styles from './styles.module.css'
import LogoSVG from '../../assets/Logo.svg'
import { Box } from '../../components/Box';
import { MagnifyingGlassPlus } from 'phosphor-react';

export const Home = () => {

    return (
        <div className={styles.container}>
            <img src={LogoSVG} alt="" />
            <h1 className={styles.title}>Seu <span> duo</span> está aqui.</h1>

            <div className={styles.cardContainer}>
                <a href="" className={styles.boxContainer}>
                    <img src="/game1.png" alt="" />
                    <div>
                        <strong>League of Legends</strong>
                        <span>4 anúncios</span>
                    </div>
                </a>
                <a href="" className={styles.boxContainer}>
                    <img src="/game2.png" alt="" />
                    <div>
                        <strong>Dota 2</strong>
                        <span>4 anúncios</span>
                    </div>
                </a>
                <a href="" className={styles.boxContainer}>
                    <img src="/game3.png" alt="" />
                    <div>
                        <strong>Counter Strike</strong>
                        <span>4 anúncios</span>
                    </div>
                </a>
                <a href="" className={styles.boxContainer}>
                    <img src="/game4.png" alt="" />
                    <div>
                        <strong>Apex Legends</strong>
                        <span>4 anúncios</span>
                    </div>
                </a>
                <a href="" className={styles.boxContainer}>
                    <img src="/game5.png" alt="" />
                    <div>
                        <strong>Fortnite</strong>
                        <span>4 anúncios</span>
                    </div>
                </a>
                <a href="" className={styles.boxContainer}>
                    <img src="/game6.png" alt="" />
                    <div>
                        <strong>World of Warcraft</strong>
                        <span>4 anúncios</span>
                    </div>
                </a>
            </div>

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
