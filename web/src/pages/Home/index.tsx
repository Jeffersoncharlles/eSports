import styles from './styles.module.css'
import LogoSVG from '../../assets/Logo.svg'
import { Box } from '../../components/Box';
import { MagnifyingGlassPlus } from 'phosphor-react';
import { Card } from '../../components/Card';
import { useGame } from '../../context/GameContext';
import * as Dialog from '@radix-ui/react-dialog'
import { ModalAd } from '../../components/ModalAd';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export const Home = () => {
    const { games, isLoading } = useGame()
    const [sliderRef, instanceRef] = useKeenSlider({
        mode: "free",
        loop: true,
        breakpoints: {
            "(min-width: 200px)": {
                slides: { perView: 2.2, spacing: 5 },
            },
            "(min-width: 400px)": {
                slides: { perView: 2.5, spacing: 5 },
            },
            "(min-width: 600px)": {
                slides: { perView: 3.5, spacing: 5 },
            },
            "(min-width: 800px)": {
                slides: { perView: 4.5, spacing: 5 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 5.5, spacing: 10 },
            },
            "(min-width: 1200px)": {
                slides: { perView: 6.5, spacing: 10 },
            },
        },
        slides: { origin: "center", perView: 5.5, spacing: 10},
    })

    return (
        <div className={styles.container}>
            <img src={LogoSVG} alt="" />
            <h1 className={styles.title}>Seu <span> duo</span> está aqui.</h1>

            <hr className="my-5"/>

            <div ref={sliderRef} className="keen-slider">
                {games.map((item) => (
                    <div key={item.id} className="keen-slider__slide">
                        <Card game={item} />
                    </div>
                ))}
            </div>

            <Dialog.Root>
                <div className={styles.cardBoxWrapperGradient}>
                    <div className={styles.carBoxContainer}>
                        <Box />
                        <Dialog.Trigger type='button' className={`${styles.buttonPublish} bg-violet-500`}>
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
