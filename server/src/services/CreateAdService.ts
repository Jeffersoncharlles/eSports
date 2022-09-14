import { prisma } from "../database/prisma"
import { convertHoursStringsMinutos } from '../utils/convertHoursStringtoMinutos';

interface Props {
    gameId: string
    name: string
    yearsPlaying: number
    discord: string
    weekDays: number[]
    hourStart: string
    hourEnd: string
    useVoiceChannel: boolean
}


class CreateAdService {
    async execute({ discord, gameId, hourEnd, hourStart, name, useVoiceChannel, weekDays, yearsPlaying }: Props) {

        const ad = await prisma.ad.create({
            data: {
                discord,
                gameId,
                hourEnd: convertHoursStringsMinutos(hourEnd),
                hourStart: convertHoursStringsMinutos(hourStart),
                name,
                useVoiceChannel,
                weekDays: weekDays.join(','),
                yearsPlaying

            }
        })


        return ad
    }
}

export { CreateAdService }
