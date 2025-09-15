import {Dispatch, FC, SetStateAction} from "react";
import {CalendarProps, months} from "../../type/Types";

interface  CalendarHeaderProps extends CalendarProps {
    calendarType: 'DATE'|'MONTH' |'YEAR'
    setCalendarType: Dispatch<SetStateAction<'DATE'|'MONTH'|'YEAR'>>;
}


const CalendarMonth:FC<CalendarHeaderProps> =(props)=>{
    return (
        <div className="js-datepicker-month-picker" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "4px", marginTop: "8px" }}>
            {months[props.lang].map((m, idx) => (
                <div
                    key={idx}
                    className={`months`}
                    onClick={() => {
                        props.setViewMonth(() => idx);
                        props.setCalendarType('DATE');
                    }}
                >
                    {m}
                </div>
            ))}
        </div>
    )
}
export default CalendarMonth;