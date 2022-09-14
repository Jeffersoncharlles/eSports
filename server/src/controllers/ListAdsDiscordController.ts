import { Request, Response } from "express";
import { ListAdsDiscordService } from "../services/ListAdsDiscordService";


class ListAdsDiscordController {
    async handle(req: Request, res: Response) {
        const adsDiscord = new ListAdsDiscordService()
        const adId = req.params.id
        const response = await adsDiscord.execute({ adId })

        return res.json(response)

    }
}

export { ListAdsDiscordController }
