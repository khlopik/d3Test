import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { map, filter } from 'lodash';
import data from '@/data/tabs.json';

const tabs = data.tabs;

export default (
  <Switch>
    {map(tabs, item => (
      <Route
        exact
        path={`/${item.id}`}
        key={item.id}
        component={require(`./components/${item.path}`).default}
      />
    ))}
    <Redirect from='/' exact to={`${filter(tabs, ['order', 0])[0].id}`} />
    <Route render={() => <h1>PAGE NOT FOUND!</h1>} />
  </Switch>
);
