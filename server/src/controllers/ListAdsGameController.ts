import { Request, Response } from "express";
import { ListAdsGameService } from "../services/ListAdsGameService";


class ListAdsGameController {
    async handle(req: Request, res: Response) {
        const listAds = new ListAdsGameService()
        const gameId = req.params.id;
        const response = await listAds.execute({ gameId })

        return res.json(response)

    }
}


export { ListAdsGameController }
