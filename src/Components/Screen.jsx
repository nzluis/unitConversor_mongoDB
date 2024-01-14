
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';

Screen.propTypes = {
    result: PropTypes.string,
    setResult: PropTypes.func,
    saved: PropTypes.array,
    setSaved: PropTypes.func
}


export default function Screen({ result, setResult, saved, setSaved }) {
    const modes = ["km_miles", "miles_km", "feet_m", "m_feet", "cm_inches", "inches_cm"]
    const conversion = [0.621371, 1.60934, 0.3048, 3.28084, 0.393701, 2.54]

    const [factor, setFactor] = useState(conversion[0])
    const [selectedMode, setSelectedMode] = useState("km_miles")
    const [inputValue, setInputValue] = useState("")
    const [toggle, setToggle] = useState(false)

    const modesIndex = modes.indexOf(selectedMode)

    const units = selectedMode.split("_")
    const handleLike = () => {
        if (inputValue) {
            setSaved([...saved, [inputValue, units[0], result, units[1]]])
            setInputValue("")
        }
    }
    console.log(0 % 2)
    const handleSwitch = () => {
        setToggle(previousToggle => !previousToggle)
        modesIndex % 2 === 0 ? setSelectedMode(modes[(modesIndex % 2) + 1]) : setSelectedMode(modes[(modesIndex % 2) - 1])
        setInputValue(result)
    }

    useEffect(() => {
        setFactor(conversion[modesIndex])
        setToggle(false)
    }, [selectedMode]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setResult((Math.round((inputValue * factor) * 100) / 100).toFixed(2))
    }, [factor, inputValue]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="screenContainer">
            <div className="screenTitle">
                <h2>convert</h2>
            </div>
            <div className="displayContainer">
                <div className="displayRow">
                    <div className="selectMeasure">
                        <form action="#" id="selectForm">
                            <select
                                value={selectedMode}
                                onChange={e => setSelectedMode(e.target.value)}
                            >
                                <option value="km_miles" >km &#8594; miles </option>
                                <option value="miles_km" >miles &#8594; km </option>
                                <option value="feet_m" >feet &#8594; m </option>
                                <option value="m_feet" >m &#8594; feet </option>
                                <option value="cm_inches" >cm &#8594; inches </option>
                                <option value="inches_cm" >inches &#8594; cm </option>
                            </select>
                        </form>
                        <a onClick={handleSwitch}>
                            <img src="/public/imgs/exchange-svgrepo-com2.svg" alt="exchange_logo" width="24px" height="24px" />
                        </a>
                    </div>
                    <div className='inputGroup'>
                        <div className="inputLine">
                            <input placeholder="number here" type="number" name="numberToConvert" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                        </div>
                        <p> {toggle ? units[1] : units[0]}</p>
                    </div>
                </div>
                <div className="displayRow">
                    <button className="saveButton" onClick={handleLike}>
                        <img src="/public/imgs/iconmonstr-favorite-6-240.png" alt="likes_logo" width="24px" height="24px" />
                    </button>
                    <div className='resultGroup'>
                        <p>{!isNaN(result) ? result : "0.00"}</p>
                        <span>{toggle ? units[0] : units[1]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

