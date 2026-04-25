import { useGame } from "../context/GameContext"

export default function ScoreDisplay() {
    const { score, moves, maxMoves } = useGame();

    return (
        <div className="flex justify-between mb-6 text-sm font-bold text-gray-600">
            <p>Score: {score}</p>
            <p>Moves Left: {maxMoves - moves}</p>
        </div>
    )
}

