import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface GameContextProps {
    games: GameProps[]
}

export interface GameProps {
    id: string;
    title: string;
    bannerUrl: string;
    _count: {
        ads: number
    };
}
const GameContext = createContext({} as GameContextProps)


export const GameProvider = ({ children }: { children: React.ReactNode }) => {
    const [games, setGames] = useState<GameProps[]>([])

    const getGames = async () => {
        const { data } = await api.get('games')

        if (data) {
            setGames(data)
        }
    }

    useEffect(() => {
        getGames()
    }, [])

    return (
        <GameContext.Provider value={{ games }}>
            {children}
        </GameContext.Provider>
    )

}

export const useGame = () => {
    const context = useContext(GameContext)

    return context
}
