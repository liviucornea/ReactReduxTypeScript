import React from 'react';
import './_flipCardFigure.scss'

type Props = {
    titleFront: string,
    titleBack: string
}

export default function FlipCardFigure(props: Props) {
    return (
        <div className="container">
            <span>This is a Flip Card component. Please do a mouse over</span>
            <div className="card-container">
                <div className="card">
                    <figure className="front">
                        <h1>{props.titleFront}</h1>
                    </figure>
                    <figure className="back">
                        <h1>{props.titleBack}</h1>
                    </figure>
                </div>
            </div>
        </div>);
}
