import React  from 'react';
import Calculator from "./Calculator/Calculator";

export function Feature() {
    let mainCssClass= 'container';
    return (<div className={mainCssClass}>
        <div><span> Fetrue component rendered</span></div>
        <div><span> Subcomponents will be defined here</span></div>
        <Calculator/>
    </div>)
}