import React from 'react';
import {useRouteMatch} from "react-router";
import {TopicsList} from "../data-models";

type Props = {}

export default function Resource({}: Props) {
    let match = useRouteMatch();
    let topic = TopicsList.find(topic => {
        // @ts-ignore
        return topic.id === match.params.topicId;
    });
    let resource = topic?.resources.find( res => {
        // @ts-ignore
        return res.id === match.params.resourceId;
    });
    return (<div className="resource">
        <h3>Resource: </h3>
        <p>{resource?.description }</p>
        <a href={resource?.url}> More Info</a>
    </div>);
}