import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import { Home } from './components/Home';
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
        <Home
            value={store.getState()}
            addNote={addNote}
            deleteNote={deleteNote}
            changeNote={changeNote}
        />
        {/*<Counter
            value={store.getState()}
            addNote={addNote}
            deleteNote={deleteNote}
            changeNote={changeNote}
        //id={this.props.id}
        />*/}
    </BrowserRouter >,
    rootEl
)

render()
store.subscribe(render)