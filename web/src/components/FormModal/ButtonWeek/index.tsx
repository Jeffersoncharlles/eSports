import styles from './styles.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLElement>{
    titleName:string
}

export const ButtonWeek = ({titleName,...rest}:Props) => {

    return(
        <button {...rest} className={styles.container}>
            {titleName}
        </button>
    );
}
