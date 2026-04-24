import { useNavigate } from "react-router";
import { useGame } from "../context/GameContext";
import { usePlayer } from "../context/PlayerContext";



const difficulites = [
    { key: "easy", label: "EASY", emoji: "😊", pairs: 6, time: "120s" },
    { key: "medium", label: "MEDIUM", emoji: "🤔", pairs: 8, time: "90s" },
    { key: "legendary", label: "LEGENDARY", emoji: "😈", pairs: 12, time: "45s" },
];

const themes = [
    { key: 'nature',   label: 'Nature',   emoji: '🌿', desc: 'Beautiful landscapes and nature' },
    { key: 'animals',  label: 'Animals',  emoji: '🐾', desc: 'Cute animals' },
    { key: 'food',     label: 'Food',     emoji: '🍕', desc: 'Delicious food' },
    { key: 'space',    label: 'Space',    emoji: '🚀', desc: 'Rockets and planets' },
    { key: 'sports',   label: 'Sports',   emoji: '⚽', desc: 'All kinds of sports' },
    { key: 'music',    label: 'Music',    emoji: '🎵', desc: 'Music and instruments' },
];

export default function Home() {
    const navigate = useNavigate();

    const { difficulty, setDifficulty, startGame, theme, setTheme } = useGame();

    const { username, gamePlayed, topScore, achievements } = usePlayer();

    const stats = [
        { label: "Games Played", value: gamePlayed },
        { label: "High Score", value: topScore },
        { label: "Achievements", value: achievements },
    ];

    const handleStart = () => {
        startGame();
        navigate("/game");
    }

    return (
      <main className="md:max-w-4xl mx-auto p-10">
        <div className="bg-gray-50 p-8 shadow-xl rounded-2xl">
          <div className="flex flex-col space-y-5 text-center">
            <h1 className="text-4xl text-purple-700 font-bold">
              Memory Master
            </h1>
            <p className="text-gray-400 font-medium text-md">
              Welcome, {username}!
            </p>
          </div>
          {/* stats at the top */}
          <div className="grid grid-cols-3 max-w-lg gap-5 mt-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className=" bg-blue-100 p-4 rounded-xl text-center"
              >
                <p className="text-sm font-medium text-gray-700 mb-2">
                  {stat.label}
                </p>
                <p className="text-xl font-bold text-purple-700">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          {/* Choose your difficulty */}
          <div className="mt-10">
            <h2 className="text-center font-bold text-2xl">
              Choose Your Difficulty
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
              {difficulites.map((levelStrength) => (
                <div
                  key={levelStrength.key}
                  onClick={() => setDifficulty(levelStrength.key)}
                  className={`flex-1 p-4 text-center font-bold rounded-xl border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${difficulty === levelStrength.key ? "bg-linear-to-br from-blue-400 to-purple-950 text-white shadow-xl border-yellow-600" : "bg-white text-white border-gray-200 hover:border-yellow-600"}`}
                >
                  <p className="text-4xl mb-2">{levelStrength.emoji}</p>
                  <p className="mb-2 text-lg">{levelStrength.label}</p>
                  <p className="mb-2 text-lg">{levelStrength.pairs} pairs</p>
                  <p className="mb-2 text-lg">{levelStrength.time} timer</p>
                </div>
              ))}
            </div>
            {difficulty && (
              <div className="p-4 text-center text-gray-600">
                <p className="mt-2">
                  Selected:{" "}
                  <span className="font-bold">{difficulty.toUpperCase()}</span>
                </p>
                <p className="mt-1">
                  {difficulites.find((diff) => diff.key === difficulty).pairs}{" "}
                  card pairs -{" "}
                  {difficulites
                    .find((diff) => diff.key === difficulty)
                    .time.replace("s", "")}{" "}
                  seconds
                </p>
              </div>
            )}
          </div>
          {/* Choose your theme */}
          <div className="mt-10">
            <h2 className="text-center text-2xl font-bold">
              Choose your theme
            </h2>
            <div className="grid grid-col-1 sm:grid-cols-3 gap-3 mt-5">
              {themes.map((t) => (
                <div
                  key={t.key}
                  onClick={() => setTheme(t.key)}
                  className={`flex-1 h-46 p-4 text-center font-bold rounded-xl border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${theme === t.key ? "bg-linear-to-br from-blue-400 to-purple-950 text-white shadow-xl" : "bg-white text-white border-gray-200"}`}
                >
                  <p className="text-5xl mb-4">{t.emoji}</p>
                  <p className="mb-2 text-lg">{t.label}</p>
                  <p className="text-lg mb-1">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {theme && (
            <div className="p-4 text-center text-gray-600 mb-10">
              <p className="mt-2">
                Selected Theme:{" "}
                <span className="font-bold">{theme.toUpperCase()}</span>
              </p>
              <p className="mt-1">{themes.find((t) => t.key === theme).desc}</p>
            </div>
          )}

          {/* Start button */}
          <div className="flex justify-center">
            <button
              onClick={handleStart}
              className="w-48 bg-green-700 hover:bg-green-600 text-center py-3 text-white text-xl font-bold rounded-2xl cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl active:scale"
            >
              Start Game 🚀
            </button>
          </div>

          {/* View */}
          {/* <div>
            <button
              className="cursor-pointer"
              onClick={() => navigate("/leaderboard")}
            >
              View Leaderboard
            </button>
            <button
              className="cursor-pointer"
              onClick={() => navigate("/stats")}
            >
              View Stats (Coming Soon..)
            </button>
            <button
              className="cursor-pointer"
              onClick={() => navigate("/settings")}
            >
              View Settings (Coming Soon..)
            </button>
          </div> */}
        </div>
      </main>
    );
}