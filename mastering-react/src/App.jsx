import "./index.css"
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Game from "./pages/Game"
import Gameover from "./pages/Gameover"
import Leaderboard from "./pages/Leaderboard"
import Navigation from "./components/Navigation"

function App() {


  return (
    <div className="min-h-screen bg-linear-to-br from-blue-400 to-purple-950">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/gameover" element={<Gameover />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  );
}

export default App
