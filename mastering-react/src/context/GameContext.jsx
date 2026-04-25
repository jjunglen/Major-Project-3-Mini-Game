import { createContext, useContext, useState } from "react";


const GameContext = createContext();

export function GameProvider({ children }) {
    const [ score, setScore ] = useState(0);
    const [ gameState, setGameState ] = useState("idle");
    const [ difficulty, setDifficulty ] = useState("medium");
    const [ theme, setTheme ] = useState("nature");
    const [ timeRemaining, setTimeRemaining ] = useState(60);
    const [ moves, setMoves ] = useState(0);

    
    const startGame = () => {
        setScore(0);
        setMoves(0);
        setGameState("playing");
        setTimeRemaining(
            difficulty === "easy" ? 120 : difficulty === "medium" ? 90 : 45
        );
    }

    const gameOver = () => setGameState("Game over");
    const addScore = (points) => setScore((score) => score + points);
    const increaseMoves = () => setMoves((move) => move + 1 );

    return (
        <GameContext.Provider
            value={{
                score,
                gameState,
                difficulty,
                theme,
                timeRemaining,
                moves,
                setDifficulty,
                setTheme,
                setTimeRemaining,
                startGame,
                gameOver,
                addScore,
                increaseMoves,   

            }}
        >
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    const context = useContext(GameContext);
    if (!context) {
        throw new Error("useGame must be within a GameProvider");
    }

    return context;
}
