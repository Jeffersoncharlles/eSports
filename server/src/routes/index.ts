import { Request, Response, Router } from 'express'
import { CreateAdController } from '../controllers/CreateAdController'
import { ListAdsDiscordController } from '../controllers/ListAdsDiscordController'
import { ListAdsGameController } from '../controllers/ListAdsGameController'
import { ListGamesController } from '../controllers/ListGamesController'


const listGames = new ListGamesController()
const listAdsGame = new ListAdsGameController()
const listAdDiscord = new ListAdsDiscordController()
const createAd = new CreateAdController()

const Routes = Router()

Routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'hello world' })
})
Routes.post('/games/:id/ads', createAd.handle)
Routes.get('/games', listGames.handle)
Routes.get('/games/:id/ads', listAdsGame.handle)
Routes.get('/ads/:id/discord', listAdDiscord.handle)


export { Routes }
