import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/api";

interface GameContextProps {
    games: GameProps[]
    isLoading: boolean
    createAds: (data:any, weekDays:string[],useVoiceChannel:boolean)=>void
}

interface GameProps {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number
    };
}


const GameContext = createContext<GameContextProps>({} as GameContextProps)



export const GameProvider = ({ children }: { children: React.ReactNode }) => {
    const [games, setGames] = useState<GameProps[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const getGames = async () => {
        setIsLoading(false)
        const { data } = await api.get('/games')
        if (data) {
            setGames(data)
            setIsLoading(true)
        }
    }

    const createAds = async (data:any,weekDays:string[],useVoiceChannel:boolean)=>{


        await api.post(`games/${data.game}/ads`,{
            "name": data.name,
            "yearsPlaying":Number(data.yearsPlaying),
            "discord":data.discord,
            "weekDays":weekDays,
            "hourStart":data.hourStart,
            "hourEnd":data.hourEnd,
            "useVoiceChannel":useVoiceChannel
        })
    }

    useEffect(() => {
        getGames()
    }, [])

    return (
        <GameContext.Provider value={{ games, isLoading,createAds }}>
            {children}
        </GameContext.Provider>
    )

}


export const useGame = () => {
    const context = useContext(GameContext)

    return context
}
