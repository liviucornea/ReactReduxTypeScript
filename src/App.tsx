import React from 'react';
import './App.css';
import AppMenu from "./app/components/app-menu/app-menu";
import { Spinner } from './app/components/spinner/spinner';

function App() {
    return (
        <>
            <header className="App-header">
                <AppMenu />
            </header>
            <Spinner />
        </>
    );
}

export default App;
