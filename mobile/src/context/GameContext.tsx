import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface GameContextProps {
    games: GameProps[]
    gameAds: GameAdsProps[]
    getListGameAds: (id: string) => void
}

export interface GameAdsProps {
    id: string;
    name: string;
    weekDays: string[];
    useVoiceChannel: boolean;
    yearsPlaying: number;
    hourStart: string;
    hourEnd: string;
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
    const [gameAds, setGameAds] = useState<GameAdsProps[]>([])

    const getGames = async () => {
        const { data } = await api.get('games')

        if (data) {
            setGames(data)
        }
    }

    const getListGameAds = async (id: string) => {
        if (id) {
            const { data } = await api.get(`games/${id}/ads`)

            if (data) {
                setGameAds(data)
            }
        }

    }

    useEffect(() => {
        getGames()
    }, [])

    return (
        <GameContext.Provider value={{
            games, gameAds, getListGameAds
        }}>
            {children}
        </GameContext.Provider>
    )

}

export const useGame = () => {
    const context = useContext(GameContext)

    return context
}
