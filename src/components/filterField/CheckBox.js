import { useState } from "react";

export default function CheckBox() {
    const [isChecked, setIsChecked] = useState(false)

    return <input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)}/>
    

}