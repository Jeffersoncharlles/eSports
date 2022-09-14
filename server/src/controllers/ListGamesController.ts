import { Request, Response } from "express";
import { ListGamesService } from "../services/ListGamesService";



class ListGamesController {
    async handle(req: Request, res: Response) {
        const listGames = new ListGamesService()
        const response = await listGames.execute()
        return res.json(response)
    }
}


export { ListGamesController }
