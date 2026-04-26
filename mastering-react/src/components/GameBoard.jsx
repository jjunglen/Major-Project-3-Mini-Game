import { useGame } from "../context/GameContext"

export default function GameBoard({ cards, isCardFlipped, handleFlip}) {
    const { difficulty } = useGame();
    const countPairs = difficulty === "easy" ? 6 : difficulty === "medium" ? 8 : 12;

    const gridClass = difficulty === "easy" ? "grid-cols-3 " : difficulty === "medium" ? "grid-cols-4" : "grid-cols-4"

    const gridHeight = difficulty === "easy" ? "h-40" : difficulty === "medium" ? "h-36" : "w-36 h-36"

    return (
      <div className={`grid gap-4 ${gridClass}`}>
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => handleFlip(card.id)}
            className={
              isCardFlipped(card)
                ? `${gridHeight} mt-6 w-full rounded-xl cursor-pointer overflow-hidden border-2 border-purple-600`
                : `${gridHeight} mt-6 w-full rounded-xl cursor-pointer overflow-hidden border-2 border-purple-400 hover:border-yellow-600 hover:bg-linear-to-br hover:from-blue-400 hover:to-purple-950`
            }
          >
            {isCardFlipped(card) ? (
              <img
                src={`https://picsum.photos/id/${card.imageId}/300/300`}
                alt="card"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex justify-center items-center text-white text-3xl">
                ?
              </div>
            )}
          </div>
        ))}
      </div>
    );
}

