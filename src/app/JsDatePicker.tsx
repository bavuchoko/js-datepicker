import {FC, useEffect, useRef, useState} from "react";
import {DatePickerProps} from "./type/Types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarMinus,} from "@fortawesome/free-regular-svg-icons";
import Calendar from "./sub/Calendar";
import {formatDate} from "./hook/useGenerateCalendar";
import Buttons from "./sub/component/Buttons";
import Timer from "./sub/Timer";


const JsDatePicker:FC<DatePickerProps> =(
    {
        value,
        setValue,
        onChange,
        style,
        time,
        lang ='en',
        onClear,
        onSave,
        today,
        clickAndClose
    }
)=>{

    const [open, setOpen] = useState<boolean>(false)


    const ref = useRef<HTMLDivElement>(null);

    const labelRef = useRef<HTMLLabelElement>(null);
    const [dropdownPosition, setDropdownPosition] = useState<'bottom' | 'top'>('bottom');
    const now = new Date();
    const [viewYear, setViewYear] = useState(now.getFullYear());
    const [viewMonth, setViewMonth] = useState(now.getMonth());


    const handleSelect = (date: Date) => {
        setValue?.(date);
        onChange?.(date);
        if(!time && clickAndClose) handleOpen()
    };

    const calendarRef =  useRef<HTMLDivElement>(null);

    const handleOpen = () => {
        if (labelRef.current) {

            const rect = labelRef.current.getBoundingClientRect();
            const calendarHeight = 280;
            const spaceBelow = window.innerHeight - rect.bottom;
            setDropdownPosition(spaceBelow < calendarHeight ? 'top' : 'bottom');
        }
        setOpen(!open);
    };
    const [calendarHeight, setCalendarHeight] = useState<number>(0)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const displayDate = value;

    useEffect(() => {
        if (calendarRef.current) {
            setCalendarHeight(calendarRef.current.offsetHeight);
        }
    }, [open, viewYear, viewMonth]);

    return (
        <div ref={ref} style={{ position: 'relative'}}>
            <label
                ref={labelRef}
                style={style}
                htmlFor="js-datepicker"
                tabIndex={0}
                className={`js-datepicker`}
                onClick={handleOpen}
            >
                <FontAwesomeIcon
                    icon={faCalendarMinus}
                    className={`js-datepicker-calendar-icon`}
                />
             <span >{formatDate(displayDate)} </span>
        </label>

        <input id={'js-datepicker'} type={'date'} className={`js-datepicker-input`} style={style} />

            {open && (
                    <div
                        style={{
                            position: "absolute",
                            top: dropdownPosition === "bottom" ? "30px" : undefined,
                            bottom: dropdownPosition === "top" ? "55px" : undefined,
                            zIndex: 1000,
                            background:'white',
                            display:'flex',
                            alignItems: "stretch"
                        }}
                    >
                        <div ref={calendarRef} style={{ flex: 1, display: 'flex', flexDirection: 'column', border: "1px solid #eaecee",}}>

                            <Calendar
                                lang={lang}
                                selected={value}
                                handleSelect={handleSelect}
                                today={now}
                                viewYear={viewYear}
                                viewMonth={viewMonth}
                                setViewYear={setViewYear}
                                setViewMonth={setViewMonth}
                            />
                            { (onSave || onClear || today) &&
                                <Buttons
                                    onSave={()=>onSave?.(value)}
                                    onClear={onClear}
                                    today
                                    onToday={()=> {
                                        setViewYear(now.getFullYear());
                                        setViewMonth(now.getMonth());
                                    }}
                                />
                            }
                        </div>
                        { time &&
                            <Timer value={value} setValue={setValue} height={calendarHeight} />
                        }
                    </div>
            )}
        </div>
    )
}
export default JsDatePicker;
