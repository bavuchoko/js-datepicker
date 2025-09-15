import {RefObject, useState} from "react";

export function useDeterminePosition(labelRef: RefObject<HTMLElement | null>, defaultHeight = 280) {
    const [position, setPosition] = useState<'bottom' | 'top'>('bottom');

    const updatePosition = () => {
        if (labelRef.current) {
            const rect = labelRef.current.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            setPosition(spaceBelow < defaultHeight ? 'top' : 'bottom');
        }
    };

    return [position, updatePosition] as const;
}