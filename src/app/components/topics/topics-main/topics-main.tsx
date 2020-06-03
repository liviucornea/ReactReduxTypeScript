import React from 'react';
import { TopicsList } from'../data-models';
import {Link, Route, useRouteMatch} from "react-router-dom";
import Topic from "../topic/topic";

type Props = {
    description: string
}

export default function TopicsMain(input: Props) {
    let match = useRouteMatch();
    return (<div className={'container'}>
        <span>Topics: {input.description} </span>
        <ul>
            {TopicsList.map( (topic, id) => {
              return (
                  <li key={id}>
                      <Link to={`${match.url}/${topic.id}` } > {topic.name} </Link>
                  </li>
              )
            })}
        </ul>
        <hr />
        <Route path={`${match.path}/:topicId` } >
            <Topic/>
        </Route>
    </div>);
}
