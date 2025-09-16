import {FC, useEffect, useRef} from "react";

interface TimerProps {
    value: Date | undefined;
    setValue?: (date: Date) => void;
    height?: number | undefined;
    month?: number | undefined;
}

const Timer: FC<TimerProps> = ({ value, setValue, height, month }) => {

    const hour = value ? value.getHours() : 9;
    const minute = value ? value.getMinutes() : 0;


    const hourRef = useRef<HTMLDivElement>(null);
    const minuteRef = useRef<HTMLDivElement>(null);

    const hours = Array.from({ length: 24 }, (_, i) => i);
    const minutes = Array.from({ length: 60 }, (_, i) => i);

    useEffect(() => {
        if (hourRef.current) {
            const active = hourRef.current.querySelector<HTMLDivElement>(
                ".js-datepicker-timer-hour[style*='bold']"
            );
            if (active) {
                const parent = hourRef.current;
                const activeTop = active.offsetTop;

                const scrollTop = activeTop - 120

                parent.scrollTo({
                    top: scrollTop,
                    behavior: "smooth",
                });
            }
        }
    }, [hour, month]);


    useEffect(() => {
        if (minuteRef.current) {
            const active = minuteRef.current.querySelector<HTMLDivElement>(
                ".js-datepicker-timer-minute[style*='bold']"
            );
            if (active) {
                const parent = minuteRef.current;
                const activeTop = active.offsetTop;

                const scrollTop = activeTop - 120;
                parent.scrollTo({
                    top: scrollTop,
                    behavior: "smooth",
                });
            }
        }
    }, [minute]);

   return(
       <div style={{position:'absolute', right:'-210px', display:'flex', height:height, overflowY:'hidden'}}>
           <div ref={hourRef} className={'no-scroll js-datepicker-timer'}>
               {hours.map((h) => (
                   <div
                       key={h}
                       className={`js-datepicker-timer-box js-datepicker-timer-hour`}
                       style={{
                           fontWeight: h === hour ? "bold" : "normal",
                           color: h === hour ? "#007ac0" : "#939191",
                       }}
                       onClick={() => {
                           if (setValue) {
                               const base = value || new Date();
                               const newDate = new Date(base);
                               newDate.setHours(h);

                               if (!value) newDate.setMinutes(0);
                               newDate.setSeconds(0);
                               setValue(newDate);
                           }
                       }}
                   >
                       {h.toString().padStart(2, "0")}
                   </div>
               ))}
           </div>
           <div ref={minuteRef} className={'no-scroll  js-datepicker-timer'}>
               {minutes.map((m) => (
                   <div
                       key={m}
                       className={`js-datepicker-timer-box js-datepicker-timer-minute`}
                       style={{
                           fontWeight: m === minute ? "bold" : "normal",
                           color: m === minute ? "#007ac0" : "#939191",
                       }}
                       onClick={() => {
                           if (setValue) {
                               const base = value || new Date();
                               const newDate = new Date(base);
                               newDate.setMinutes(m);
                               if (!value) newDate.setHours(hour);
                               newDate.setSeconds(0);
                               setValue(newDate);
                           }
                       }}
                   >
                       {m.toString().padStart(2, "0")}
                   </div>
               ))}
           </div>

       </div>
   )
};

export default Timer;
