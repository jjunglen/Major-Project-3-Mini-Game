import { useEffect, useRef } from "react";

export function useTimer(isRunning, setTime, onExpire) {
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((previous) => {
                    if (previous <= 1) {
                        clearInterval(intervalRef.current);
                        onExpire();
                        return 0;
                    }
                    return previous - 1;
                });
            }, 1000);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning, setTime, onExpire]);
}
