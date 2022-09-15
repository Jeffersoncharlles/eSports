import styles from './styles.module.css'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react';
import { Input } from '../FormModal/Input';

export const ModalAd = () => {

    return (
        <Dialog.Portal className={styles.container}>
            <Dialog.Overlay className={styles.overlay} />
            <Dialog.Content className={styles.content}>
                <Dialog.Title className={styles.title}>
                    Publique um anúncio
                </Dialog.Title>
                   <form className={styles.form}>
                    <div className={styles.form_game}>
                        <label  htmlFor="game">Qual o game?</label>
                        <Input
                            id='game'
                            type="text"
                            placeholder='Selecione o game que deseja jogar'
                        />
                    </div>

                    <div className={styles.form_name}>
                        <label htmlFor="name">Seu nome (ou nickname)</label>
                        <Input id='name' type="text" placeholder='Como te chamam dentro do game?' />
                    </div>

                    <div className={styles.form_year_discord}>
                        <div className={styles.form_year}>
                            <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                            <Input id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO' />
                        </div>
                        <div className={styles.form_discord}>
                            <label htmlFor="discord">Qual seu Discord?</label>
                            <Input id='discord' type="text" placeholder='Usuario#0000' />
                        </div>
                    </div>

                    <div className={styles.form_gameDuration}>
                        <div className={styles.form_week}>
                            <label htmlFor="weekDays">Quando costuma jogar?</label>
                            <div className={styles.form_week_buttons}>
                                <button className={styles.form_week_button} title='Domingo'>D</button>
                                <button className={styles.form_week_button} title='Segunda'>S</button>
                                <button className={styles.form_week_button} title='Terça'>T</button>
                                <button className={styles.form_week_button} title='Quarta'>Q</button>
                                <button className={styles.form_week_button} title='Quinta'>Q</button>
                                <button className={styles.form_week_button} title='Sábado'>S</button>
                            </div>
                        </div>
                        <div className={styles.form_duration}>
                            <label htmlFor="hourStart">Qual horário do dia?</label>
                            <div className={styles.form_duration_time}>
                                <Input type="time"  id="hourStart"  placeholder='De'/>
                                <Input type="time"  id="hourEnd"  placeholder='Até'/>
                            </div>
                        </div>
                    </div>

                    <div className={styles.form_checkbox}>
                        <Input type="checkbox" name="" id="" />
                        Costumo me conectar ao chat de voz
                    </div>
                    <footer className={styles.form_footer_buttons}>
                        <Dialog.Close className={styles.form_footer_cancel}>
                            Cancelar
                        </Dialog.Close>
                        <button type="submit" className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600">
                            <GameController size={24} />
                            Encontrar duo
                            </button>
                    </footer>
                   </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
}
