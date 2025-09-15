import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {CalendarProps, months} from "../../type/Types";
import {Dispatch, FC, SetStateAction} from "react";


interface  CalendarHeaderProps extends CalendarProps {
    calendarType: 'DATE'|'MONTH' |'YEAR'
    setCalendarType: Dispatch<SetStateAction<'DATE'|'MONTH'|'YEAR'>>;
}

const CalendarHeader:FC<CalendarHeaderProps> =(props)=>{
    return (
        <div className="js-datepicker-calendar-header">
            <FontAwesomeIcon
                icon={faArrowLeft}
                className={``}
                onClick={() => {
                    if (props.calendarType === 'MONTH') {
                        props.setViewYear((y) => y - 1);
                    } else {
                        props.setViewMonth((m) => (m === 0 ? 11 : m - 1));
                        props.setViewYear((y) => (props.viewMonth === 0 ? y - 1 : y));
                    }
                }}
            />
            <span className="js-datepicker-calendar-month"
                  onClick={() => props.setCalendarType('MONTH')}
            >
                {props.calendarType ==='MONTH' && <>  {props.viewYear} </> }
                {props.calendarType ==='DATE' && <> {months[props.lang][props.viewMonth]} {props.viewYear} </> }

                </span>
            <FontAwesomeIcon
                icon={faArrowRight}
                className={``}
                onClick={() => {
                    if (props.calendarType === 'MONTH') {
                        props.setViewYear((y) => y + 1);
                    } else {
                        props.setViewMonth((m) => (m === 11 ? 0 : m + 1));
                        props.setViewYear((y) => (props.viewMonth === 11 ? y + 1 : y));
                    }
                }}
            />
        </div>
    )
}
export default CalendarHeader;