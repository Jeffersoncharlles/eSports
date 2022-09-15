import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../lib/api";

interface GameContextProps {
    games: GameProps[]
    isLoading: boolean
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

    useEffect(() => {
        getGames()
    }, [])

    return (
        <GameContext.Provider value={{ games, isLoading }}>
            {children}
        </GameContext.Provider>
    )

}


export const useGame = () => {
    const context = useContext(GameContext)

    return context
}
