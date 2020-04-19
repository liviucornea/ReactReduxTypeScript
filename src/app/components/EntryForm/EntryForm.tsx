import React, {useState} from 'react';
import {ParentForm} from "./ParentForm/ParentForm";
type Props = { formName: string }

export function EntryForm(props?: Props) {
    let mainCssClass = 'container';
    const [nameFromChild, setNameFromChild] = useState('');

    const handleFromChild = (name: string  ) => {
        setNameFromChild(name);
    }
    return <div className={mainCssClass}>
        <div><span>Entry Form component in progress</span></div>
        <div> {props?.formName ? <div><span> Name is {props.formName}</span></div> : null}</div>
        <div> {nameFromChild ? <div><span> Message from parent component {nameFromChild}</span></div> : null}
        </div>
        <hr/>
        <div>
            <ParentForm name={'Cornea'} sendToHost={handleFromChild}/>
        </div>
    </div>
}