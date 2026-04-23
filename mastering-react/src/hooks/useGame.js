import { useState, useEffect } from "react";

export function useGameBoard(imageIds) {
    const [ cards, setCards ] = useState([]);
    const [ flipped, setFlipped ] = useState([]);
    const [ match, setMatch ] = useState([]);
    const [ isChecking, setIsChecking ] = useState(false);

    useEffect(() => {
        if (imageIds.length === 0) return

        const cardPairs = [...imageIds, ...imageIds].map((iId, i) => ({
            id: i,
            imageId: iId,
        })).sort(() => Math.random())

        setCards(cardPairs)
        setFlipped([])
        setMatch([])
    }, [imageIds])
}