import { useState, useEffect } from "react";

export function useGameBoard(imageIds = []) {
    const [ cards, setCards ] = useState([]);
    const [ flipped, setFlipped ] = useState([]);
    const [ match, setMatch ] = useState([]);
    const [ isChecking, setIsChecking ] = useState(false);

    useEffect(() => {
        if (imageIds.length === 0) return

        const cardPairs = [...imageIds, ...imageIds].map((iId, i) => ({
            id: i,
            imageId: iId,
        })).sort(() => Math.random() - 0.5)

        setCards(cardPairs)
        setFlipped([])
        setMatch([])
    }, [imageIds])

    const flipCard = (cardId) => {
        if (isChecking || flipped.length === 2) return

        const selectedCard = cards.find(card => card.id === cardId);
        if (!selectedCard || flipped.includes(cardId) || match.includes(selectedCard.imageId)) return

        const newCardFlipped = [...flipped, cardId];
        setFlipped(newCardFlipped);

        if (newCardFlipped.length === 2) {
            setIsChecking(true);
            const [cardId1, cardId2] = newCardFlipped
            const card1 = cards.find(card => card.id === cardId1);
            const card2 = cards.find(card => card.id === cardId2);

            if (card1.imageId === card2.imageId) {
                setMatch(previous => [...previous, card1.imageId]);
                setFlipped([]);
                setIsChecking(false)
            } else {
                setTimeout(() => {
                    setFlipped([]);
                    setIsChecking(false);
                }, 1000);
            }
        }
    };

    const isCardFlipped = (card) => {
        return flipped.includes(card.id) || match.includes(card.imageId)
    };

    const allMatched = imageIds && match.length === imageIds.length && imageIds.length > 0;

    return {
        cards,
        flipCard,
        isCardFlipped,
        allMatched,
        flipped
    }
}