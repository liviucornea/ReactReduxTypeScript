export interface IResource {
    name: string;
    id: string;
    description: string;
    url: string
}

export interface ITopic {
    name: string;
    id: string;
    description: string;
    resources: IResource[];
}

export const TopicsList: ITopic[] = [{
    name: 'React Router',
    id: 'react-router',
    description: 'Declarative component base router',
    resources: [{
        name: 'URL parameters',
        id: 'url-parameters',
        description: 'URL parameters are parameters use to navigate',
        url: 'https://www.reactjs.org'
    }, {
        name: 'Programaticaly navigate',
        id: 'programaticaly-navigate',
        description: 'When building an app with react you can navigate programaticaly',
        url: 'https://www.reactjs.org'
    }],
},
    {  name: 'React.js',
    id: 'reactjs',
    description: 'A javascript library',
    resources: [{
        name: 'React lifecycle events',
        id: 'react-events',
        description: 'Reactl lifecycle events allow you to control data loading an release unnecesary resources',
        url: 'https://www.reactjs.org'
    }, {
        name: 'React AHA Moments',
        id: 'react-aha-moments',
        description: '',
        url: 'https://www.reactjs.org'
    }],
},
    {  name: 'Functional Programing',
        id: 'functional-programing',
        description: 'Declarative component base router',
        resources: [{
            name: '',
            id: '',
            description: '',
            url: 'https://www.reactjs.org'
        }, {
            name: '',
            id: '',
            description: '',
            url: 'https://www.reactjs.org'
        }],
    }];