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
import MessageCollector from "./app/components/message-collector/message-collector";
import TopicsMain from "./app/components/topics/topics-main/topics-main";
import NotFound from './app/components/not-found/NotFound';
import TodoEdit from "./features/todo/todo-edit/todo-edit";
import FlipCardFigure from './app/components/flipCardFigure/flipCardFigure';

function App() {
    const user = useSelector(selectUser);
    // NOTE  example of route guard navigation bellow
    const navigateToCounter = () => {
        if (user.loggedIn) {
            return <Counter />
        } else {
            window.alert('You are not logged in');
            console.log('Your are not logged in yet to access counter');
        }
    }
    return (
        <React.Fragment>
            <MessageCollector />
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
                    <Route path="/todo/:id">
                        <TodoEdit />
                    </Route>
                    <Route path="/topics">
                        <TopicsMain description={'My main Topic functional component'} />
                    </Route>
                    <Route path="/flipCard">
                        <FlipCardFigure titleFront={'Front card'} titleBack={'Back card'}  />
                    </Route>
                    <Route path="/:aiurea">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </React.Fragment>
    );
}

export default App;
