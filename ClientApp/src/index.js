import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';
import { BrowserRouter } from 'react-router-dom';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');

const store = createStore(counter);
const rootEl = document.getElementById('root');
const addNote = (action) => {
    store.dispatch({ action, type: 'ADD_NOTE' });
}
const deleteNote = (action) => {
    store.dispatch({ action, type: 'DELETE_NOTE' });
}
const changeNote = (id, text) => {
    store.dispatch({ id, text, type: 'CHANGE_NOTE'})
}

const render = () => ReactDOM.render(
    <BrowserRouter basename={baseUrl}>
        <Counter
            value={store.getState()}
            addNote={addNote}
            deleteNote={deleteNote}
            changeNote={changeNote}
        />
    </BrowserRouter >,
    rootEl
)

render()
store.subscribe(render)