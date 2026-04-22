import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    const [ value, setValue ] = useState(() => {
        const savedItem = localStorage.getItem(key);
        return savedItem ? JSON.parse(savedItem) : initialValue;
    });

    const saveValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    }

    return [value, saveValue];
};
