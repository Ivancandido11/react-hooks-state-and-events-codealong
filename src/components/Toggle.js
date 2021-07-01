import React, {useState} from "react";

function Toggle() {
  let [isOn, setIsOn] = useState(false)

  const toggle = () => {
    setIsOn((isOn) => !isOn)
    console.log(isOn)
  }

  const color = isOn ? "red" : "white"

  return <button onClick={toggle} style={{ background: color }}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
