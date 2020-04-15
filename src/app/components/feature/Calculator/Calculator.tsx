import React, {useState} from 'react';
import {BoilingVerdict} from "../BoilingVerdict/BoilingVerdict";

export default function Calculator() {

    const [temperature, setTemperature] = useState(0);
    return (<div className="Calculator">
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    defaultValue={temperature}
                    onChange={e => setTemperature(parseInt(e.target.value))} />
                <BoilingVerdict
                    celsius={temperature} />
            </fieldset>

        </div>
        );
}
