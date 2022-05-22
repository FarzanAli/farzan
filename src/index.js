import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className='text-3xl'>
                Project Setup
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Index />
);