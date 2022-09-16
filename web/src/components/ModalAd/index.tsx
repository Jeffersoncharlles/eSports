import styles from './styles.module.css'
import * as Dialog from '@radix-ui/react-dialog'
import * as Checkbox from '@radix-ui/react-checkbox'
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { Check, GameController } from 'phosphor-react';
import { Input } from '../FormModal/Input';
import { useGame } from '../../context/GameContext';
import { useState } from 'react';
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';

// const CreateFormSchema = z.object({
//     name: z.string().trim(),
//     yearsPlaying: z.number(),

// })

// type CreateFormInputs = z.infer<typeof CreateFormSchema>

export const ModalAd = () => {
    const {games,createAds} = useGame()
    const [weekDays,setWeekDays] = useState<string[]>([])
    const [useVoiceChannel,setUseVoiceChannel] = useState(false)

    // const {
    //     control, // usar sempre que precisa incluir informação no formulado sem ser nativo html
    //     register,
    //     handleSubmit,
    //     formState: { isSubmitting },
    //     reset,
    // } = useForm<CreateFormInputs>({
    //     resolver:zodResolver(CreateFormSchema)
    // })

    const handleCreateAd = async (e: React.FormEvent)=>{
        e.preventDefault()

        const formData = new FormData(e.target as HTMLFormElement)

        const formatted = Object.fromEntries(formData)
       try {
        createAds(formatted,weekDays,useVoiceChannel)
       } catch (error) {
            console.log(error)
       }

    }

    return (
        <Dialog.Portal className={styles.container}>
            <Dialog.Overlay className={styles.overlay} />
            <Dialog.Content className={styles.content}>
                <Dialog.Title className={styles.title}>
                    Publique um anúncio
                </Dialog.Title>
                   <form className={styles.form} onSubmit={handleCreateAd}>
                    <div className={styles.form_game}>
                        <label  htmlFor="game">Qual o game?</label>
                        <select
                            name='game'
                            id="game"
                            className={styles.form_select}
                            defaultValue=""
                        >
                            <option value="" disabled>Selecione o game que deseja jogar</option>
                            {games.map((game)=>(
                                <option key={game.id} value={game.id}>{game.title}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.form_name}>
                        <label htmlFor="name">Seu nome (ou nickname)</label>
                        <Input name='name' id='name' type="text" placeholder='Como te chamam dentro do game?' />
                    </div>

                    <div className={styles.form_year_discord}>
                        <div className={styles.form_year}>
                            <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                            <Input name='yearsPlaying' id='yearsPlaying' type="number" placeholder='Tudo bem ser ZERO'  />
                        </div>
                        <div className={styles.form_discord}>
                            <label htmlFor="discord">Qual seu Discord?</label>
                            <Input name='discord' id='discord' type="text" placeholder='Usuario#0000' />
                        </div>
                    </div>

                    <div className={styles.form_gameDuration}>
                        <div className={styles.form_week}>
                            <label htmlFor="weekDays">Quando costuma jogar?</label>

                                <ToggleGroup.Root
                                    type='multiple'
                                    className={styles.form_week_buttons}
                                    onValueChange={setWeekDays}
                                    value={weekDays}
                                >
                                    <ToggleGroup.Item
                                        value='0'
                                        className={`w-8 h-8 rounded  ${weekDays.includes('0')? 'bg-violet-500': 'bg-zinc-900'}`}
                                        title='Domingo'
                                    >D</ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='1'
                                        className={`w-8 h-8 rounded ${weekDays.includes('1')? 'bg-violet-500': 'bg-zinc-900'}`}
                                        title='Segunda'
                                    >S</ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='2'
                                        className={`w-8 h-8 rounded ${weekDays.includes('2')? 'bg-violet-500': 'bg-zinc-900'}`}
                                        title='Terça'
                                    >T</ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='3'
                                        className={`w-8 h-8 rounded ${weekDays.includes('3')? 'bg-violet-500': 'bg-zinc-900'}`}
                                        title='Quarta'
                                    >Q</ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='4'
                                        className={`w-8 h-8 rounded ${weekDays.includes('4')? 'bg-violet-500': 'bg-zinc-900'}`}
                                        title='Quinta'
                                    >Q</ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='5'
                                        className={`w-8 h-8 rounded ${weekDays.includes('5')? 'bg-violet-500': 'bg-zinc-900'}`}
                                        title='Sexta-Feira'
                                    >S</ToggleGroup.Item>
                                    <ToggleGroup.Item
                                        value='6'
                                        className={`w-8 h-8 rounded ${weekDays.includes('6')? 'bg-violet-500': 'bg-zinc-900'}`}
                                        title='Sábado'
                                    >S</ToggleGroup.Item>
                                </ToggleGroup.Root>

                        </div>
                        <div className={styles.form_duration}>
                            <label htmlFor="hourStart">Qual horário do dia?</label>
                            <div className={styles.form_duration_time}>
                                <Input name='hourStart' type="time"  id="hourStart"  placeholder='De'/>
                                <Input name='hourEnd' type="time"  id="hourEnd"  placeholder='Até'/>
                            </div>
                        </div>
                    </div>

                    <label className={styles.form_checkbox}>
                        <Checkbox.Root
                            className='w-6 h-6 p-1 rounded bg-zinc-900'
                            onCheckedChange={(checked)=>{
                                checked === true ? setUseVoiceChannel(true) : setUseVoiceChannel(false)
                            }}
                        >
                            <Checkbox.Indicator

                            >
                                <Check  className='2-4 h4 text-emerald-400'/>
                            </Checkbox.Indicator>
                        </Checkbox.Root>
                        Costumo me conectar ao chat de voz
                    </label>
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
