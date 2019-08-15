import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Calendar, Note } from './components/Calendar';

export default class App extends Component {
    displayName = App.name

  render() {
    return (
        <div>
            <Layout>
                <Route exact path='/' component={Calendars} />
            </Layout>
        </div>
    );
  }
}
