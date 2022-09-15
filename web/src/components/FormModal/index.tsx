import { GameController } from 'phosphor-react';
import { Input } from './Input';
import styles from './styles.module.css'

export const FormModal = () => {

    return(
        <form className={styles.form}>
        <div className={styles.form_name}>
            <label  htmlFor="game">Qual o game?</label>
            <Input
                id='game'
                type="text"
                placeholder='Selecione o game que deseja jogar'
            />
        </div>

        <div>
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input id='name' type="text" placeholder='Como te chamam dentro do game?' />
        </div>

        <div>
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input id='name' type="text" placeholder='Como te chamam dentro do game?' />
        </div>

        <div>
            <div>
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input id='yearsPlaying' type="text" placeholder='Tudo bem ser ZERO' />
            </div>
            <div>
                <label htmlFor="discord">Qual seu Discord?</label>
                <Input id='discord' type="text" placeholder='Usuario#0000' />
            </div>
        </div>
        <div>
            <div>
                <label htmlFor="weekDays">Quando costuma jogar?</label>
            </div>
            <div>
                <label htmlFor="hourStart">Qual horário do dia?</label>
                <div>
                    <Input type="time"  id="hourStart"  placeholder='De'/>
                    <Input type="time"  id="hourEnd"  placeholder='Até'/>
                </div>
            </div>
        </div>
        <div>
            <Input type="checkbox" name="" id="" />
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
    );
}
