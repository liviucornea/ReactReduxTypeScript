import React from 'react';
import style from  './ToDoMain.module.scss';

export function ToDoMain() {
    let mainClass = ['container ' + style.mainDiv ].join(' ');
    return (<div className={mainClass}>
           <div>
               <span>Please select your to from the list below:</span>
           </div>
       </div>
       );
}