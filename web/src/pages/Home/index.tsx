import styles from './styles.module.css'
import LogoSVG from '../../assets/Logo.svg'

export const Home = () => {

    return (
        <div className={styles.container}>
            <img src={LogoSVG} alt="" />
            <h1 className={styles.title}>Seu <span> duo</span> está aqui.</h1>

            <div className={styles.cardContainer}>
                <a href="">
                    <img src="/game1.png" alt="" />
                </a>
                <a href="">
                    <img src="/game2.png" alt="" />
                </a>
                <a href="">
                    <img src="/game3.png" alt="" />
                </a>
                <a href="">
                    <img src="/game4.png" alt="" />
                </a>
                <a href="">
                    <img src="/game5.png" alt="" />
                </a>
                <a href="">
                    <img src="/game6.png" alt="" />
                </a>
            </div>
        </div>
    );
}
