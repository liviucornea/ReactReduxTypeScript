import React  from 'react';
import Calculator from "./Calculator/Calculator";

export function Feature() {
    let mainCssClass= 'container';
    return (<div className={mainCssClass}>
        <div><span> Feature component rendered</span></div>
        <div><span> it has a child component</span></div>
        <Calculator/>
    </div>)
}