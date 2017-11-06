import React from 'react';
import { NavLink } from 'react-router-dom';
import { map, orderBy } from 'lodash';
import './Nav.scss';

import data from '@/data/tabs.json';

const tabs = data.tabs;

const Nav = () => (
  <ul className='nav'>
    {map(orderBy(tabs, 'order'), (tab) => (
    <li key={tab.id}>
      <NavLink exact activeClassName='active' to={`/${tab.id}`}>
        {tab.title}
      </NavLink>
    </li>
    ))}
  </ul>
);

export default Nav;
