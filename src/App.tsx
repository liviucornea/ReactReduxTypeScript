import React from 'react';
import {incrementByAmount} from "./features/counter/counterSlice";
import './App.css';
import {useDispatch} from "react-redux";
import AppMenu from "./app/components/app-menu/app-menu";

function App() {
    const dispatch = useDispatch();
    let handleClick = (i: string) =>
    {
        dispatch(incrementByAmount(Number(i) || 0))
    }
    return (
        <>
            <header className="App-header">
                <AppMenu/>
            </header>
        </>
    );
}

export default App;
