import {CSSProperties} from "react";

export type DatePickerProps = {
    placeholder?: string;
    value?: Date | undefined;
    setValue?: (value: Date | undefined) => void;
    onChange?: (value: Date | undefined) => void;
    style?: CSSProperties;
    lang?:'en'|'ko'
    clickAndClose?:boolean;
    today?: boolean;
    time?:boolean;
    onClear?: () => void;
    onSave?: (v:any) => void;
};

export type CalendarProps = {
    lang: "ko" | "en";
    selected: Date | undefined;
    handleSelect: (date: Date) => void;
    today?: Date;
    viewMonth: number;
    viewYear: number;
    setViewMonth: (fn: (m: number) => number) => void;
    setViewYear: (fn: (y: number) => number) => void;
}


export type ButtonProps = {
    clear?:boolean;
    save?:boolean;
    today?:boolean;
    onClear?: () => void;
    onSave?: (v:any) => void;
    onToday?: () => void;

}
export interface TimerProps {
    value: Date | undefined;
    setValue?: (date: Date) => void;
}

export const weekdays = {
    en: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    ko: ["일", "월", "화", "수", "목", "금", "토"],
};
export const months = {
    en: [
        "January ", "February ", "March ", "April ", "May ", "June ",
        "July ", "August ", "September ", "October ", "November ", "December "
    ],
    ko: [
        "1월 ", "2월 ", "3월 ", "4월 ", "5월 ", "6월 ",
        "7월 ", "8월 ", "9월 ", "10월 ", "11월 ", "12월 "
    ],
};