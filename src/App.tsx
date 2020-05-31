import React, { useState } from 'react';
import './App.css';
import AppMenu from "./app/components/app-menu/app-menu";
import { Spinner } from './app/components/spinner/spinner';
import { Footer } from './app/components/footer/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './app/components/home/Home';
import { Counter } from './features/counter/Counter';
import { Feature } from './app/components/feature/Feature';
import { User } from './features/user/User';
import { EntryForm } from './app/components/EntryForm/EntryForm';
import { ToDoMain } from './features/todo/ToDoMain';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';

function App() {
    const user = useSelector(selectUser);
    const navigateToCounter = () => {
        if (user.loggedIn) {
            return <User />
        } else {
            console.log('Your are not logged in yet to access counter');
        }
    }
    return (
        <React.Fragment>
            <Spinner />
            <Router>
                <header className="App-header">
                    <AppMenu />
                </header>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/counter" exact strict render={navigateToCounter}>
                    </Route>
                    <Route path="/feature">
                        <Feature />
                    </Route>
                    <Route path="/user" component={User}>
                    </Route>
                    <Route path="/entryForm">
                        <EntryForm formName='Entry Form' />
                    </Route>
                    <Route path="/todos">
                        <ToDoMain />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </React.Fragment>
    );
}

export default App;
