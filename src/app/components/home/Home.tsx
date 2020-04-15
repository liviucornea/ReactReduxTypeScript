import React from 'react'
import styles from './Home.module.css';

export function Home() {
    let mainClass = [styles.mainHome + ' container'].join(' ');
    return(<div className={mainClass}>
        <span>Home component content</span>
    </div>)
}