import styles from './styles.module.css'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react';

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

                    <div>
                        <label htmlFor="name">Seu nome (ou nickname)</label>
                        <input id='name' type="text" placeholder='Como te chamam dentro do game?' />
                    </div>

                    <div>
                        <div>
                            <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                            <input id='yearsPlaying' type="text" placeholder='Tudo bem ser ZERO' />
                        </div>
                        <div>
                            <label htmlFor="discord">Qual seu Discord?</label>
                            <input id='discord' type="text" placeholder='Usuario#0000' />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="weekDays">Quando costuma jogar?</label>
                        </div>
                        <div>
                            <label htmlFor="hourStart">Qual horário do dia?</label>
                            <div>
                                <input type="time"  id="hourStart"  placeholder='De'/>
                                <input type="time"  id="hourEnd"  placeholder='Até'/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        Costumo me conectar ao chat de voz
                    </div>
                    <footer>
                        <button>Cancelar</button>
                        <button type="submit">
                            <GameController />
                            Encontrar duo
                            </button>
                    </footer>
                   </form>
                </Dialog.Content>
            </Dialog.Content>
        </Dialog.Portal>
    );
}
