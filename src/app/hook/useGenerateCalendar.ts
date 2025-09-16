
export function generateCalendar(year: number, month: number) {
    const start = new Date(year, month, 1);
    const end = new Date(year, month + 1, 0);

    const days = [];
    for (let i = 0; i < start.getDay(); i++) {
        days.push(null);
    }
    for (let d = 1; d <= end.getDate(); d++) {
        days.push(new Date(year, month, d));
    }
    return days;
}


export const formatDate = (date: Date | undefined, timer?:boolean): string => {
    if (!date) return "날짜를 선택하세요";

    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };


    if (timer) {
        options.hour = "2-digit";
        options.minute = "2-digit";
        options.hour12 = false;
    }

    return date.toLocaleDateString("ko-KR", options).replace(/\./g, ".");
};