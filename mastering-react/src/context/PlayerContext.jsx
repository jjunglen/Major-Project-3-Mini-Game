import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage"


const PlayerContext = createContext();

export function PlayerProvider({ children }) {
    const [ username, setUsername] = useLocalStorage("username" ,"New Player");
    const [ highScores, setHighScores ] = useLocalStorage("highscore" ,[]);
    const [ gamePlayed, setGamePlayed ] = useLocalStorage("games-played" ,0);
    const [ achievements, setAchievements ] = useLocalStorage("achievements" ,[]);

    const yourScore = (score, difficulty) => {
        const newEntry = {
            score,
            difficulty,
            date: new Date().toISOString(),
            id: Date.now()
        };

        setHighScores(previous => [...previous, newEntry].sort((score1, score2) => score2.score - score1.score).slice(0, 5))
    };

    const topScore = highScores.length > 0 ? highScores[0].score : 0;

    return (
        <PlayerContext.Provider
            value={{
                username,
                highScores,
                gamePlayed,
                achievements,
                setUsername,
                yourScore,
                topScore,
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}


export function usePlayer() {
    const context = useContext(PlayerContext);
    if (!context) throw new Error("usePlayer must be inside PlayerProvider");
    return context;
}