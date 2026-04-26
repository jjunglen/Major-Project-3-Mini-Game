import { useLocation, useNavigate } from "react-router-dom"

import { usePlayer } from "../context/PlayerContext"

export default function Gameover() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { topScore } = usePlayer();

    const score = state?.score ?? 0;
    const moves = state?.moves ?? 0;
    const isNewBestScore = score >= topScore && score > 0;

    return (
      <main className="max-w-2xl mx-auto p-12">
        <div className="bg-white rounded-xl p-6 shadow-xl text-center">
            <h1 className="text-5xl font-bold text-red-600 mb-3">Game Over!</h1>
            {isNewBestScore && (<p className="text-yellow-400 font-semibold mb-3">🏆 New High Score!</p>)}
            <p className="text-6xl font-bold text-gray-700 my-6">{score}</p>
            <p className="text-gray-500 mb-3">You completed the challenge in {moves} moves</p>

            <div className="flex gap-4 mt-6">
                <button
                    onClick={() => navigate("/")} 
                    className="flex-1 py-3 border-2 border-purple-400 rounded-xl hover:border-yellow-500 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-linear-to-br hover:from-blue-400 hover:to-purple-950 hover:text-white font-semibold text-sm"   
                >
                    Play Again
                </button>
                <button
                    onClick={() => navigate("/leaderboard")}
                    className="flex-1 py-3 border-2 border-purple-400 rounded-xl hover:border-yellow-500 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-linear-to-br hover:from-blue-400 hover:to-purple-950 hover:text-white font-semibold text-sm"
                >
                    Leaderboard
                </button>
            </div>

        </div>
      </main>
    );
}
