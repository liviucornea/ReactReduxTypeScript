import React , { useRef }  from 'react';
import {useDispatch, useSelector} from "react-redux";
import {logIn, selectUser} from "./userSlice";
import { useHistory } from "react-router-dom";
import {UserModel} from "../models/UserModel";

export function User() {
    const dispatch = useDispatch();
    let history = useHistory();
    const user = useSelector(selectUser);
    const firstNameEl = useRef<HTMLInputElement>(null);
    const lastNameEl = useRef<HTMLInputElement>(null);
    const passwordEl = useRef<HTMLInputElement>(null);
    const loginUser = () =>{
        const userEntered =  new UserModel('NEW');
        if(firstNameEl && firstNameEl.current){
            userEntered.firstName = firstNameEl.current.value;
        }
        if(lastNameEl && lastNameEl.current){
            userEntered.lastName = lastNameEl.current.value;
        }

        if(passwordEl && passwordEl.current){
            userEntered.password = passwordEl.current.value;
        }

        dispatch(logIn(userEntered));
        history.push("/home");
    }
    return (
        <div className={'container'}>
            <span> User Component content</span>
            <span>User name is : {user.firstName}</span>
            <div>
            <label>User First Name</label>
            <input type="text" ref={firstNameEl} defaultValue={user.firstName} />
            </div>
            <div>
            <label>User Last Name</label>
            <input type="text" ref={lastNameEl} defaultValue={user.lastName} />
            </div>
            <div>
            <label>User Password</label>
            <input type="text" ref={passwordEl} defaultValue={user.password} />
            </div>
            <button onClick={loginUser}>Login User</button>
        </div>)
}