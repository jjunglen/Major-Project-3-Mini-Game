import { createContext, useContext, useState } from "react";


const GameContext = createContext();

export default function Game({ children }) {
    const [ score, setScore ] = useState(0);
    const [ gameState, setGameState ] = useState("idle");
    const [ v, setDifficulty ] = useState("medium");
    const [ theme, setTheme ] = useState("nature");
    const [ timeRemaining, setTimeRemaining ] = useState(60);
    const [ moves, setMoves ] = useState(0);
    
    const startGame = () => {
        setScore(0);
        setMoves(0);
        setGameState("playing");
        setTimeRemaining(
            difficulty === "easy" ? 120 : difficulty === "medium" ? 90 : 45
        )
    }

    const endGame = () => {
        
    }
}