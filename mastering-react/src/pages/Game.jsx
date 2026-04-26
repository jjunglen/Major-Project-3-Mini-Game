import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGame } from "../context/GameContext";
import { usePlayer } from "../context/PlayerContext";
import { useGameBoard } from "../hooks/useGame";
import { usePicsumImages } from "../hooks/useAPI";
import { useTimer } from "../hooks/useTimer";
import ScoreDisplay from "../components/ScoreDisplay";
import GameBoard from "../components/GameBoard";
import Timer from "../components/Timer";

export default function Game() {
    const navigate = useNavigate();

    const {
        score,
        gameState,
        difficulty,
        timeRemaining,
        setTimeRemaining,
        gameOver,
        addScore,
        increaseMoves,
        moves,
        maxMoves
    } = useGame()

    const { yourScore } = usePlayer();

    const countPairs = difficulty === "easy" ? 6 : difficulty === "medium" ? 8 : 12;
    const { imageIds, loading, error } = usePicsumImages(countPairs);

    const { cards, flipCard, isCardFlipped, flipped, allMatched } = useGameBoard(imageIds);

    useEffect(() => {
        if (allMatched && gameState === "playing") {
            const timeBonus = timeRemaining * 10;
            gameOver();
            yourScore(score + timeBonus, difficulty);
            navigate("/gameover", { state: {score: score + timeBonus, moves }});
        };
    }, [allMatched])

    useEffect(() => {
        if (moves >= maxMoves && gameState === "playing") {
            gameOver();
            yourScore(score, difficulty);
            navigate("/gameover", { state: {score: score, moves }});
        };
    }, [moves])

    useTimer(
        gameState === "playing",
        setTimeRemaining,
        () => {
            gameOver();
            yourScore(score, difficulty);
            navigate("/gameover", {state: {score, moves}});
        }
    )

    const handleFlip = (cardId) => {
        if (gameState !== 'playing') return
        flipCard(cardId);
        addScore(5);

        if (flipped.length === 1) {
            increaseMoves();
        }
    }

    if (loading) return (
        <main className="max-w-2xl mx-auto px-4 py-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center text-red-600">
                Loading game....
            </div>
        </main>
    )

    if (error) return (
        <main className="max-w-2xl mx-auto px-4 py-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl text-center text-red-600">
                {error} -- please refresh your game and try again.
            </div>
        </main>
    )

    return (
       <main className="max-w-2xl mx-auto px-4 py-6">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
                <ScoreDisplay />
                <Timer />
                <GameBoard 
                    cards={cards}
                    isCardFlipped={isCardFlipped}
                    handleFlip={handleFlip}
                />
            </div>
       </main>
    )
}