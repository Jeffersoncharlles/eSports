import { prisma } from "../database/prisma"

interface Props {
    gameId: string
}

class ListAdsGameService {
    async execute({ gameId }: Props) {

        const ads = await prisma.ad.findMany({
            where: {
                gameId
            }
        })

        return ads
    }
}


export { ListAdsGameService }
