import React, {useEffect, useState} from 'react';
import style from './ToDoMain.module.scss';
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import{ loadToDos} from './todosSlice';
import {loadCurrentTODO} from './currentToDoSlice';

export function ToDoMain() {
    let mainClass = ['container ' + style.mainDiv].join(' ');
    const [loadedToDos, setLoadedToDos] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    let history = useHistory();
    const setCurrentTODO = (todo: any ) => {
        console.log('Selected TOD', todo);
        dispatch(loadCurrentTODO(todo));
        history.push("/home");
    }
    useEffect(() => {
            setIsLoading(true);
            console.log('Started to load TODOs list');
            fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load tods')
                }
                return response.json()
            })
                .then(toDosData => {
                    setIsLoading(true);
                    dispatch(loadToDos(toDosData));
                    console.log('TODOS list is loaded:', toDosData.slice(0, 100) );
                    /// load them even slower as they come fast from network
                    setTimeout(() =>  setLoadedToDos(toDosData.slice(0, 100)), 2000);
                }).catch(err => {
                console.log('Failed to load todos list ');
                setIsLoading(false);
            })
        },
        []);
    let content = <p> Loading todos ...</p>;
    if (isLoading && loadedToDos.length > 0 ) {
        content = (<div className={mainClass}>
                <div>
                    <span>Please select your to from the list below:</span>
                    <ul>
                        {loadedToDos.map( todo => {
                            return   <li key={todo.id}
                            onClick={() => setCurrentTODO(todo)}
                            >{todo.id}  ' - '   {todo.title} + '  -  ' + {todo.completed} </li>
                        })}
                    </ul>
                </div>
            </div>
        );
    }

    return content
}