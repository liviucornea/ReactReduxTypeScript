import React from 'react';
import { Route, useRouteMatch } from "react-router";
import { TopicsList } from "../data-models";
import { Link } from "react-router-dom";
import Resource from "../resource/resource";

type Props = {}

export default function Topic({ }: Props) {
    // NOTE useRouteMatch example below
    // and understand the match.url and match.path
    let match = useRouteMatch();
    let topic = TopicsList.find(topic => {
        // @ts-ignore
        return topic.id === match.params.topicId;
    });
    return (<div className="topic">
        <h2>Topic: {topic?.name} </h2>
        <p>{topic?.description}</p>
        <ul>
            {topic?.resources.map((resource, index) => {
                return (
                    <li key={index}>
                        <Link to={`${match.url}/${resource.id}`}> {resource.name} </Link>
                    </li>
                )
            })}
        </ul>
        <hr />
        <Route path={`${match.path}/:resourceId`} >
            <Resource />
        </Route>

    </div>);
}
