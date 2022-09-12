import { Request, Response, Router } from 'express'

const Routes = Router()

Routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: 'hello world' })
})

Routes.get('/ads', (req: Request, res: Response) => {
    return res.json({ message: true })
})



export { Routes }
