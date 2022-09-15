import styles from './styles.module.css'
import * as Dialog from '@radix-ui/react-dialog'

export const ModalAd = () => {

    return (
        <Dialog.Portal className={styles.container}>
            <Dialog.Overlay className={styles.overlay} />
            <Dialog.Content className={styles.content}>
                <Dialog.Title className={styles.title}>
                    Publique um anúncio
                </Dialog.Title>
                <Dialog.Content className={styles.description}>
                   <form>
                    <div>
                        <label htmlFor="game">Qual o game?</label>
                        <input id='game' type="text" placeholder='Selecione o game que deseja jogar' />
                    </div>

                    <div>
                        <label htmlFor="name">Seu nome (ou nickname)</label>
                        <input id='name' type="text" placeholder='Como te chamam dentro do game?' />
                    </div>

                   </form>
                </Dialog.Content>
            </Dialog.Content>
        </Dialog.Portal>
    );
}
