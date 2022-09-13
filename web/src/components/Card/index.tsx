import styles from './styles.module.scss'

interface Props {

}

export const Card = ({ }: Props) => {

    return (
        <a href='' className={styles.container}>
            <img src="/game3.png" alt="" />
            <div>
                <strong>Counter Strike</strong>
                <span>4 anúncios</span>
            </div>
        </a>
    );
}
