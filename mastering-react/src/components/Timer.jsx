import { useGame } from "../context/GameContext"

export default function Timer() {
    const { timeRemaining } = useGame();

    return (
        <span className="text-purple-600 text-xl font-bold">
            {timeRemaining === 1 ? `${timeRemaining} second` : `${timeRemaining} seconds`}
        </span>
    )
}

