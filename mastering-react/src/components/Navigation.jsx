import { NavLink } from "react-router"
import { usePlayer } from "../context/PlayerContext";
import { useGame } from "../context/GameContext";

export default function Navigation() {
    const { gameState } = useGame();
    const { topScore } = usePlayer();

    return (
      <nav className="flex items-center font-bold justify-between gap-5 p-4 bg-white mb-2">
        <div>Memory Master</div>
        <div className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? " text-purple-600 font-bold " : "text-black"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/leaderboard"
            className={({ isActive }) =>
              isActive ? "text-purple-600 font-bold " : "text-black "
            }
          >
            Leaderboard
          </NavLink>

          <NavLink
            to="/game"
            className={({ isActive }) =>
              isActive ? "text-purple-600 font-bold " : "text-black"
            }
            >
              Game Board
            </NavLink>
            
          <p className="text-Black">Best: {topScore}</p>
        </div>
      </nav>
    );
}