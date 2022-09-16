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
    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
            perView: 5,
            spacing: 32,
          },
      })

    return (
        <div className={styles.container}>
            <img src={LogoSVG} alt="" />
            <h1 className={styles.title}>Seu <span> duo</span> está aqui.</h1>
            <div ref={ref} className="keen-slider">
                {isLoading && (
                    <div className={styles.cardContainer}>
                        {games.map((item) => (
                            <div key={item.id}  className={`keen-slider__slide`}>
                                <Card  game={item} />
                            </div>
                        ))}
                    </div>
                )}
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
