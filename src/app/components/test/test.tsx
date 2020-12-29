import React from 'react';



function Test({theInput}) {
    return (
        <div>
            <span>This is a component used for various test purpose during application life span</span>
            <div>
                <span> Now we try to analise some routing params usages</span>
            </div>
            <div>
                <span>Parmeter passed is {theInput.match.params.testparam}</span>
            </div>
            <div>
                <span>Second parameter passed in App.tsx via Route definition is {theInput.second}</span>
            </div>
        </div>
    );
}

export default Test;