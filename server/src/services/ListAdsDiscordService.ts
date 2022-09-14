import { prisma } from "../database/prisma"

interface Props {
    adId: string
}

class ListAdsDiscordService {
    async execute({ adId }: Props) {


        const ad = await prisma.ad.findFirstOrThrow({
            select: {
                discord: true
            },
            where: {
                id: adId,

            }
        })

        return {
            discord: ad?.discord
        }
    }
}

export { ListAdsDiscordService }
