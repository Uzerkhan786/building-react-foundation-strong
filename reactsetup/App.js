import React from 'react';
import  ReactDOM from 'react-dom/client';
import Html from './Fun';
import {a} from './Fun'
function Fun(){
    return (
        <>
        {Html()}
        {a}
        <h1>uzer khan  from vit</h1>
        <h2>khan</h2>
        </>
    )
}

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(Fun())
