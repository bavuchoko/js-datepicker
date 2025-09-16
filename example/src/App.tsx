import {JsDatePicker } from '@bavuchoko/js-datepicker'
import {useState} from "react";



function App() {



  return (
    <div className="App" style={{width:'100%', display:"flex"}}>

    <JsDatePicker time today  onSave={(v=>console.log(v))}/>
    </div>
  );
}

export default App;
