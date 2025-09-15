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
                        <div
                            key={idx}
                            onClick={() => props.handleSelect(day)}
                            className={`js-datepicker-calendar-date js-datepicker-date-${weekdays['en'][idx%7]}  
                                ${ (props.today?.getFullYear() === day.getFullYear() 
                                && props.today?.getMonth() === day.getMonth()
                                && props.today?.getDate() === day.getDate()
                            
                            ) && 'js-datepicker-today'}                           
                                js-datepicker-date-${day.getDate()} ${
                                    props.selected &&
                                    day.toDateString() === props.selected.toDateString()
                                        ? "js-datepicker-selected"
                                        : ''
                            }`}
                        >
                            {day.getDate()}
                        </div>
                    ) : (
                        <div key={idx} />
                    )
                )}
            </div>
        </>
    )
}
export default CalendarDate;