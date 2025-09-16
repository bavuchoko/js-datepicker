import {FC} from "react";
import {ButtonProps} from "../../type/Types";


const Buttons:FC<ButtonProps> =({
    onClear,
    onSave,
    onToday,
    today,
    value
                                })=>{
    return (
        <div className={`js-datepicker-buttons`}>
            {onSave &&
            <div onClick={()=> onSave(value)}>save</div>
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