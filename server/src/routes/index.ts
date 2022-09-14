import { Request, Response, Router } from 'express'
import { ListAdsGameController } from '../controllers/ListAdsGameController'
import { ListGamesController } from '../controllers/ListGamesController'
import { prisma } from '../database/prisma'

const listGames = new ListGamesController()
const listAdsGame = new ListAdsGameController()

const Routes = Router()

Routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'hello world' })
})


Routes.post('/ads', (req: Request, res: Response) => {

    return res.status(201).json([])
})

Routes.get('/games', listGames.handle)
Routes.get('/games/:id/ads', listAdsGame.handle)


Routes.get('/ads/:id/discord', (req: Request, res: Response) => {

    return res.json([])
})


export { Routes }
