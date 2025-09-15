import {FC} from "react";
import {ButtonProps} from "../../type/Types";


const Buttons:FC<ButtonProps> =({
    onClear,
    onSave,
    onToday,
    today
                                })=>{
    return (
        <div className={`js-datepicker-buttons`}>
            {onSave &&
            <div onClick={onSave}>save</div>
            }
            {today &&
            <div onClick={onToday}>today</div>
            }

            {onClear &&
            <div onClick={onClear}>clear</div>
            }
        </div>
    )
}

export default Buttons;