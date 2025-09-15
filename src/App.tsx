import React from 'react';
import './index.css';
import JsDatePicker from "./app/JsDatePicker";

function App() {

    const [test, setTest] = React.useState<Date|undefined>(undefined);

  return (
    <div className="App">
        <div style={{width:'200px', height:'170px', background:'white'}}></div>

        <JsDatePicker
            lang={'ko'}
            // time
            onChange={(v)=>console.log(v)}
            value={test}
            setValue={setTest}
            today
            onSave={(v)=>console.log(v)}
            onClear={()=>{setTest(undefined)}}
        />
    </div>
  );
}

export default App;
