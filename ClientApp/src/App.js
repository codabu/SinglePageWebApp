import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Activity } from './components/Activity';
import { Dog } from './components/Dog';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/activity' component={Activity} />
        <Route path='/dog' component={Dog} />
      </Layout>
    );
  }
}
