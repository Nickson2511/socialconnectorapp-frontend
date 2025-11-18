import { useEffect, useState } from "react";

/**
 * Simple slideshow hook.
 * @param count number of slides
 * @param intervalMs milliseconds between slides (default 5000)
 */
export default function useSlideshow(count: number, intervalMs = 5000) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (count <= 1) return;
        const id = setInterval(() => {
            setIndex((i) => (i + 1) % count);
        }, intervalMs);
        return () => clearInterval(id);
    }, [count, intervalMs]);

    const goto = (i: number) => setIndex(((i % count) + count) % count);
    return { index, goto };
}
