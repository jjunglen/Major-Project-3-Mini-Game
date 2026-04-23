import { useNavigate } from "react-router";
import { useGame } from "../context/GameContext";
import { usePlayer } from "../context/PlayerContext";



const DIFFICULTIES = [
    { key: "easy", label: "EASY", pairs: 6, time: "120s" },
    { key: "medium", label: "MEDIUM", pairs: 8, time: "90s" },
    { key: "legendary", label: "LEGENDARY", pairs: 12, time: "45s" },
];

export default function Home() {
    const navigate = useNavigate();

    const { difficulty, setDiffficulty, startGame, } = useGame();

    const { username, gamePlayed, topScore, achievements } = usePlayer();

    const handleStart = () => {
        startGame();
        navigate("/game");
    }

    return (
      <main className="md:max-w-4xl mx-auto p-10">
        <div className="bg-white h-screen p-8 shadow-xl rounded-2xl">
            <div className="flex flex-col space-y-5 text-center">
                <h1 className="text-4xl text-purple-700 font-bold">
                Memory Master
                </h1>
                <p className="text-gray-600 text-sm">Welcome, {username}!</p>
            </div>
            {/* stats at the top */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
                {[
                { label: "Games Played", value: gamePlayed },
                { label: "High Score", value: topScore },
                { label: "Achievements", value: achievements },
                ].map((stats) => (
                <div
                    key={stats.label}
                    className="bg-blue-100 p-4 rounded-xl text-center"
                >
                    <p className="text-sm text-gray-500 mb-2">{stats.label}</p>
                    <p className="text-xl font-bold text-gray-700">{stats.value}</p>
                </div>
                ))}
            </div>
            {/* Choose your difficulty */}
            <h2>Choose your difficulty</h2>
            
        </div>
      </main>
    );
}