import {RefObject, useEffect, useState} from "react";

export function useOutsideClick(ref: RefObject<HTMLElement | null>, initialState = false) {
    const [open, setOpen] = useState(initialState);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return [open, setOpen] as const;
}
