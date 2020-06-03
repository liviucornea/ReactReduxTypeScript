import React, {useEffect} from 'react'
import styles from './Home.module.css';
import {emptyOutMessages, loadMessage} from "../message-collector/mesagesSlice";
import {useDispatch} from "react-redux";

export function Home() {
    let mainClass = [styles.mainHome + ' container'].join(' ');
    const dispatch = useDispatch();
    // NOTE that you have to update different component ( in this case Message collector using useEffects
    // if you don't put code  dispatch( emptyOutMessages(true)); inside of use effects block you will have an error in console
    useEffect(() => {
        dispatch( emptyOutMessages(true));
    }, []);

    return(<div className={mainClass}>
        <span>Home component content</span>
    </div>)
}