
import styles from './styles.module.css'

interface Props extends React.InputHTMLAttributes<HTMLElement>{}

export const Input = ({...rest}:Props) => {

    return(
        <input
        {...rest}
        className={styles.input}
    />
    );
}
