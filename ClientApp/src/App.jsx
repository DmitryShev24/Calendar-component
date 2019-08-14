import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home, Note } from './components/Home';

export default class App extends Component {
    displayName = App.name

  render() {
    return (
        <div>
            <Layout>
                <Route exact path='/' component={Home} />
            </Layout>
        </div>
    );
  }
}
