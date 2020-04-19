import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './app/store';
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from "./app/components/home/Home";
import {Counter} from "./features/counter/Counter";
import {User} from "./features/user/User";
import {Footer} from "./app/components/footer/Footer";
import {Feature} from "./app/components/feature/Feature";
import {EntryForm} from "./app/components/EntryForm/EntryForm";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
            <App/>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/counter">
                    <Counter />
                </Route>
                <Route path="/features">
                    <Feature />
                </Route>
                <Route path="/user">
                    <User />
                </Route>
                <Route path="/entryForm">
                    <EntryForm formName='Liviu Cornea' />
                </Route>
            </Switch>
            <Footer />
        </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
