import { useState, useEffect } from "react";

export function usePicsumImages(count) {
    const [imageIds, setImageIds] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAPI = async () => {
            setLoading(true);
            setError(null)

            try {
                const response = await fetch("https://picsum.photos/v2/list?limit=100");
                if (!response.ok) throw new Error("Failed to fetch images");
                const data = await response.json();

                const shuffledCards = data.sort(() => Math.random() - 0.5);
                const countCards = shuffledCards.slice(0, count);
                const mappedCards = countCards.map((card) => card.id);

                setImageIds(mappedCards);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
    
    fetchAPI();

    }, [count])

    const getImageURL = (id) => {
        return `https://picsum.photos/id/${id}/300/300`;
    }

    return { imageIds, loading, error };
}
