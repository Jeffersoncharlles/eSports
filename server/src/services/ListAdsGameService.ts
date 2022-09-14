import { prisma } from "../database/prisma"
import { convertMinutesToHourStrings } from '../utils/convertMinutesToHourStrings';

interface Props {
    gameId: string
}

class ListAdsGameService {
    async execute({ gameId }: Props) {

        const ads = await prisma.ad.findMany({
            select: {
                id: true,
                name: true,
                weekDays: true,
                useVoiceChannel: true,
                yearsPlaying: true,
                hourStart: true,
                hourEnd: true,

            },
            where: {
                gameId
            },
            orderBy: {
                createdAt: 'desc'
            }
        })

        const response = ads.map((ad) => {
            return {
                ...ad,
                hourEnd: convertMinutesToHourStrings(ad.hourEnd),
                hourStart: convertMinutesToHourStrings(ad.hourStart),
                weekDays: ad.weekDays.split(',')
            }
        })

        return response
    }
}


export { ListAdsGameService }
