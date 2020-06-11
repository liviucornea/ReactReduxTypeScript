import React from 'react';
import {useSelector} from "react-redux";
import {selectCurentToDo} from "../currentToDoSlice";
import {useHttp} from "../../../app/hooks/useHttp";
import {ToDoModel} from "../../models/ToDoModel";
import {useParams} from "react-router";
import './_todo-edit.scss';

interface RouteParams {
    id: string
}
export default function TodoEdit() {
    // we could get it from store , commented here or get details from an endpoint as lines below
    // const toDo = useSelector(selectCurentToDo);
    const params = useParams<RouteParams>();
    let url = 'https://jsonplaceholder.typicode.com/todos';
    url = url +  '/' +  params.id;

    const [isLoading, fetchedData] = useHttp(url , 'GET',  []);
    let content: any;
    let toDo = fetchedData ? fetchedData as unknown as ToDoModel : null;
    content =  (<div className="container todo-edit">
        <h2>TO do info bellow</h2>
        <div>
            <span>ID : {toDo?.id}</span>
        </div>
        <div>
            <span>Title : {toDo?.title}</span>
        </div>
        <div>
            <span>Completed : {toDo?.completed ? 'true' : 'false'}</span>
        </div>
    </div>);
    // @ts-ignore
    if(isLoading){
        content = <span> TO DO are loading , please wait !!!!</span>
    }
    return content;
}
