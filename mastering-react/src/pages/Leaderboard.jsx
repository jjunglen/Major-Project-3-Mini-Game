import { useNavigate } from "react-router-dom"
import { usePlayer } from "../context/PlayerContext"

export default function Leaderboard() {
    const navigate = useNavigate();
    const { highScores, username, gamePlayed, topScore} = usePlayer();

    return (
      <main className="max-w-2xl mx-auto p-6">
        <div className="bg-white rounded-xl p-6 shadow-xl">
          <h1 className="text-3xl text-center font-bold text-purple-600 mb-3">
            Leaderboard
          </h1>

          <div className="flex justify-between font-semibold text-gray-500 mb-6">
            <p>Player: {username}</p>
            <p>Games Played: {gamePlayed}</p>
            <p>Best: {topScore}</p>
          </div>

          {highScores.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">
                No scores yet! Start your first game below.
              </p>
              <button
                onClick={() => navigate("/")}
                className="px-5 py-2 bg-white border-purple-400 border-2 hover:border-yellow-500 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:bg-linear-to-br hover:from-blue-400 hover:to-purple-950 hover:text-white rounded-xl font-semibold text-sm"
              >
                Start now!
              </button>
            </div>
          ) : (
            <div>
              {highScores.map((score, index) => (
                <div
                  key={score.id}
                  className="flex justify-between py-3 border-b border-gray-200"
                >
                  <p className="flex-1 text-purple-700">Rank: {index + 1}</p>
                  <p className="text-gray-600 mr-4">{username.toUpperCase()}</p>
                  <p className="font-semibold text-gray-600">{score.score}</p>
                </div>
              ))}
            </div>
          )}
          <button
            onClick={() => navigate("/")}
            className="mt-6 w-full py-4 border-2 rounded-xl border-purple-400 hover:border-yellow-600 hover:bg-linear-to-br hover:from-blue-400 hover:to-purple-950 hover:text-white cursor-pointer transition-all duration-200 hover:-translate-y-1 font-semibold text-sm"
          >
            Back to Home
          </button>
        </div>
      </main>
    );
}