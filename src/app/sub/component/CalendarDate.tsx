import {CalendarProps, weekdays} from "../../type/Types";
import {FC} from "react";
import {generateCalendar} from "../../hook/useGenerateCalendar";

interface CalendarDateProps extends CalendarProps {

}


const CalendarDate:FC<CalendarDateProps> = (props) => {
    const days = generateCalendar(props.viewYear, props.viewMonth);

    return (
        <>
            {/* 요일 */}
            <div className="js-datepicker-calendar-days">
                {weekdays[props.lang].map((day, idx) => (
                    <div
                        key={day}
                        className={
                            idx === 0
                                ? "js-datepicker-sunday"
                                : idx === 6
                                    ? "js-datepicker-saturday"
                                    : ''
                        }
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* 날짜 */}
            <div className="js-datepicker-calendar-days">
                {days.map((day, idx) =>
                    day ? (
                        (() => {
                            const isToday =
                                props.today?.getFullYear() === day.getFullYear() &&
                                props.today?.getMonth() === day.getMonth() &&
                                props.today?.getDate() === day.getDate();

                            const isSelected =
                                props.selected &&
                                day.toDateString() === props.selected.toDateString();

                            const isMarked =
                                props.marked?.some(
                                    (markedDate) => markedDate.toDateString() === day.toDateString()
                                ) ?? false;

                            return (
                                <div
                                    key={idx}
                                    onClick={() => props.handleSelect(day)}
                                    className={`js-datepicker-calendar-date js-datepicker-date-${weekdays['en'][idx % 7]}  
                        ${isToday ? "js-datepicker-today" : ""}                         
                        js-datepicker-date-${day.getDate()} 
                        ${isSelected ? "js-datepicker-selected" : ""} 
                        ${isMarked ? "js-datepicker-marked" : ""}
                    `}
                                >
                                    {day.getDate()}
                                </div>
                            );
                        })()
                    ) : (
                        <div key={idx} />
                    )
                )}
            </div>
        </>
    )
}
export default CalendarDate;