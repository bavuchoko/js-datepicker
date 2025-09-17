import {CalendarProps} from "../type/Types";
import {FC, useState} from "react";
import CalendarDate from "./component/CalendarDate";
import CalendarHeader from "./component/CalendarHeader";
import CalendarMonth from "./component/CalendarMonth";


const Calendar:FC<CalendarProps> =({
                                                   lang,
                                                   selected,
                                                   handleSelect,
                                                   viewYear,
                                                   viewMonth,
                                                   marked,
                                                   setViewYear,
                                                   today,
                                                   setViewMonth
                                               })=>{

    const [calendarType, setCalendarType] = useState<'DATE'|'MONTH'|'YEAR'>('DATE');


    return (
        <div className="js-datepicker-calendar">
            {/* 헤더 */}
            <CalendarHeader
                lang={lang}
                viewMonth={viewMonth}
                viewYear={viewYear}
                setViewMonth={setViewMonth}
                setViewYear={setViewYear}
                selected={selected}
                handleSelect={handleSelect}
                calendarType={calendarType}
                setCalendarType={setCalendarType}
            />

            {/* 날짜선택 */}
            {calendarType ==='DATE' &&
                <CalendarDate
                    lang={lang}
                    today={today}
                    viewMonth={viewMonth}
                    marked={marked}
                    viewYear={viewYear}
                    setViewMonth={setViewMonth}
                    setViewYear={setViewYear}
                    selected={selected}
                    handleSelect={handleSelect}
                />
            }
            {calendarType ==='MONTH' &&
                <CalendarMonth
                    calendarType={calendarType}
                    setCalendarType={setCalendarType}
                    lang={lang}
                    viewMonth={viewMonth}
                    viewYear={viewYear}
                    setViewMonth={setViewMonth}
                    setViewYear={setViewYear}
                    selected={selected}
                    handleSelect={handleSelect}
                />
            }
        </div>
    )
}
export default Calendar;