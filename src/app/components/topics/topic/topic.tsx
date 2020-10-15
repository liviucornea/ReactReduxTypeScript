import React from 'react';
import { Route, useRouteMatch } from "react-router";
import { TopicsList } from "../data-models";
import { Link } from "react-router-dom";
import Resource from "../resource/resource";


type Props = {}
// eslint-disable-next-line 
export default function Topic({ }: Props) {
    // NOTE useRouteMatch example below
    // and understand the match.url and match.path
    /*
    path - (string) The path pattern used to match. Useful for building nested <Route>s
url - (string) The matched portion of the URL. Useful for building nested <Link>s
Consider the route "/users/:userId". match.path would be "/users/:userId" while match.url would have the :userId value filled in, e.g. "users/5".
     */
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
