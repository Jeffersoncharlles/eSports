import styles from './styles.module.css'


interface Props {
    game: {
        id: string;
        title: string;
        bannerUrl: string;
        _count: {
            ads: number
        };
    }
}

export const Card = ({ game}: Props) => {

    return (
        <a href='' className={styles.container} >
            <img src={game.bannerUrl} alt="" />
            <div className='w-full pt-16 px-2 py-2 bg-game-gradient absolute bottom-0 left-0 right-0 md:pb-4'>
                <strong>{game.title}</strong>
                <span>{game._count.ads} anúncios</span>
            </div>
        </a>
    );
}
