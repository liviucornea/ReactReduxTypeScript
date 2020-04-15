import React, {useState} from 'react';

export const scaleNames = {
    'c': 'Celsius',
    'f': 'Fahrenheit'
};
type Props = {onTemperatureChange: (temp: number) => void,
    temperature: string | number
                scale: string}


export function TemperatureInput(props: Props) {
 const handleChange = (e: any) => {
     props.onTemperatureChange(e.target.value)
 }
return ((
    <fieldset>
        <legend>Enter temperature in {props.scale}:</legend>
        <input
            value={props.temperature}
            onChange={e => handleChange(e)} />
    </fieldset>
))
}