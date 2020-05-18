import React, {useState} from 'react';
import {ParentForm} from "./ParentForm/ParentForm";
import * as _ from 'lodash';
// import {compose , pipe} from 'lodash/fp'

type Props = { formName: string }

export function EntryForm(props?: Props) {
    let mainCssClass = 'container';
    const myObj = { name: 'Liviu'};
    const mySecondObj =  _.cloneDeep(myObj);
    const [nameFromChild, setNameFromChild] = useState('');

    const handleFromChild = (name: string  ) => {
        setNameFromChild(name);
    }
    return <div className={mainCssClass}>
        <div><span>Entry Form component in progress</span></div>
        <div>Lodash used here {mySecondObj.name}</div>
        <div> {props?.formName ? <div><span> Name is {props.formName}</span></div> : null}</div>
        <div> {nameFromChild ? <div><span> Message from child {nameFromChild}</span></div> : null}
        </div>
        <hr/>
        <div>
            <ParentForm name={'Cornea'} sendToHost={handleFromChild}/>
        </div>
    </div>
}