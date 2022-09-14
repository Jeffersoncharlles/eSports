import { Request, Response } from "express";
import { CreateAdService } from "../services/CreateAdService";


class CreateAdController {
    async handle(req: Request, res: Response) {
        const createAd = new CreateAdService()
        const gameId = req.params.id
        const { name, yearsPlaying, discord, weekDays, hourStart, hourEnd, useVoiceChannel } = req.body
        const response = await createAd.execute({ name, yearsPlaying, discord, weekDays, hourStart, hourEnd, useVoiceChannel, gameId })
        return res.json(response)
    }
}

export { CreateAdController }
