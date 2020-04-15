import React, {useState} from 'react';
import {BoilingVerdict} from "../BoilingVerdict/BoilingVerdict";

export const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
type Props = {}


export function TemperatureInput() {
 const [temperature, setTemperature] = useState(0);

return ((
    <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
            value={temperature}
            onChange={e => setTemperature(parseInt(e.target.value))} />
        <BoilingVerdict
            celsius={temperature} />
    </fieldset>
))
}