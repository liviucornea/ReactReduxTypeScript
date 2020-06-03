import React from 'react';
import { TopicsList } from'../data-models';
import {Link, Route} from "react-router-dom";
import Topic from "../topic/topic";


export default function TopicsMain() {

    return (<div className={'container'}>
        <span>Topics:</span>
        <ul>
            {TopicsList.map( (topic, id) => {
              return (
                  <li key={id}>
                      <Link to={`/topics/${topic.id}` } > {topic.name} </Link>
                  </li>
              )
            })}
        </ul>
        <hr />
        <Route path={`/topics/:topicId` } >
            <Topic/>
        </Route>
    </div>);
}
