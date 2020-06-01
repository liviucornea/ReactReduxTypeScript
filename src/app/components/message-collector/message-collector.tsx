import React, {useEffect} from 'react';
import './_message-collector.scss';
import {useSelector} from "react-redux";
import {selectMessages} from "./mesagesSlice";

type Props = {}

export default function MessageCollector({}: Props) {
    const messagesState = useSelector(selectMessages);

    // Similar to componentDidMount and componentDidUnmount:
    useEffect(() => {
        console.log(' Equivalent of component did mount');
        return () => {
            console.log(' Equivalent of component will unmount');
        }
    }, [messagesState]);
    let context = <div></div>;
    if(messagesState.list.length === 0) {
        return context;
    }
    context = (<section className={"error-collector"}>
        <div className="section-content">
            <div className="content-wrapper">
                <div className="notification">
                    <div className="notification-content">
                        {messagesState.list.map(message => {
                            return (
                                <p> {message.msgText}</p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </section>);

    return context;
}
