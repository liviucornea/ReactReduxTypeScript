import React from 'react'
import styles from './Home.module.css';
import { emptyOutMessages} from "../message-collector/mesagesSlice";
import {useDispatch} from "react-redux";

export function Home() {
    let mainClass = [styles.mainHome + ' container'].join(' ');
    const dispatch = useDispatch();
    dispatch( emptyOutMessages(true));
    return(<div className={mainClass}>
        <span>Home component content</span>
    </div>)
}