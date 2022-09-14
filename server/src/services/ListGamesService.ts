import { prisma } from "../database/prisma"



class ListGamesService {
    async execute() {
        const games = await prisma.game.findMany({
            include: {
                _count: {
                    select: {
                        ads: true
                    }
                }
            }
        })

        return games
    }
}


export { ListGamesService }
