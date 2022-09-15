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

export const Card = ({ game }: Props) => {

    return (
        <a href='' className={styles.container}>
            <img src={game.bannerUrl} alt="" />
            <div>
                <strong>{game.title}</strong>
                <span>{game._count.ads} anúncios</span>
            </div>
        </a>
    );
}
