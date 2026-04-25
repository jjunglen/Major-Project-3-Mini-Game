import { useGame } from "../context/GameContext"

export default function GameBoard({ cards, isCardFlipped, handleFlip}) {
    const { difficulty } = useGame();
    const countPairs = difficulty === "easy" ? 6 : difficulty === "medium" ? 8 : 12;

    return (
      <div className={`grid gap-4 ${countPairs <= 8 ? "grid-cols-4" : "grid-cols-6"}`}>
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleFlip(card.id)}
            className={
              isCardFlipped(card)
                ? "h-28 w-full rounded-xl cursor-pointer overflow-hidden border-2 border-purple-600"
                : "h-28 w-full rounded-xl cursor-pointer overflow-hidden border-2 border-purple-400 hover:bg-purple-300"
            }
          >
            {isCardFlipped(card) ? 
                <img src={`https://picsum.photos/id/${card.imageId}/300/300`} alt="card" className="w-full h-full object-cover" /> : 
                <div className="w-full h-full flex justify-center items-center text-white text-3xl"> 
                    ?
                </div>
            }
          </div>
        ))}
      </div>
    )
}

