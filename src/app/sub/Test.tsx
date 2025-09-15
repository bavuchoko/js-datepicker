import { FC, useRef, useEffect } from "react";

interface TimerProps {
    value: Date | undefined;
    setValue?: (date: Date) => void;
}

const Test: FC<TimerProps> = ({ value, setValue }) => {
    const hour = value ? value.getHours() : 0;
    const minute = value ? value.getMinutes() : 0;

    const hourRef = useRef<HTMLDivElement>(null);
    const minuteRef = useRef<HTMLDivElement>(null);

    const hours = Array.from({ length: 24 }, (_, i) => i);
    const minutes = Array.from({ length: 60 }, (_, i) => i);

    // 선택된 hour/minute 중앙 정렬
    useEffect(() => {
        if (hourRef.current) {
            const itemHeight = 30;
            hourRef.current.scrollTop = hour * itemHeight;
        }
        if (minuteRef.current) {
            const itemHeight = 30;
            minuteRef.current.scrollTop = minute * itemHeight;
        }
    }, [hour, minute]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>, type: "hour" | "minute") => {
        const scrollTop = e.currentTarget.scrollTop;
        const itemHeight = 30;
        const index = Math.round(scrollTop / itemHeight);
        if (type === "hour" && value) {
            const newDate = new Date(value);
            newDate.setHours(index);
            setValue?.(newDate);
        } else if (type === "minute" && value) {
            const newDate = new Date(value);
            newDate.setMinutes(index);
            setValue?.(newDate);
        }
    };

    const dialStyle: React.CSSProperties = {
        height: 90, // 3개 항목 보여줌
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        borderLeft: "1px solid #eaecee",
        borderRight: "1px solid #eaecee",
    };

    const itemStyle: React.CSSProperties = {
        height: 30,
        lineHeight: "30px",
        textAlign: "center",
        scrollSnapAlign: "center",
    };

    return (
        <div style={{ display: "flex", padding: 8, gap: 4 }}>
            {/* Hour Dial */}
            <div
                ref={hourRef}
                style={dialStyle}
                onScroll={(e) => handleScroll(e, "hour")}
            >
                {hours.map((h) => (
                    <div
                        key={h}
                        style={{
                            ...itemStyle,
                            fontWeight: h === hour ? "bold" : "normal",
                            color: h === hour ? "#007ac0" : "#000",
                        }}
                    >
                        {h.toString().padStart(2, "0")}
                    </div>
                ))}
            </div>

            {/* Minute Dial */}
            <div
                ref={minuteRef}
                style={dialStyle}
                onScroll={(e) => handleScroll(e, "minute")}
            >
                {minutes.map((m) => (
                    <div
                        key={m}
                        style={{
                            ...itemStyle,
                            fontWeight: m === minute ? "bold" : "normal",
                            color: m === minute ? "#007ac0" : "#000",
                        }}
                    >
                        {m.toString().padStart(2, "0")}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Test;
