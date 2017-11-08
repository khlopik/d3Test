import React from 'react';
import PropTypes from 'prop-types';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ReferenceLine, ReferenceDot } from 'recharts';
import last from 'lodash/last';

const propTypes = {
  data: PropTypes.array.isRequired,
};

const Chart = (props) => (
  <AreaChart width={730} height={250} data={props.data}
             margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
    <defs>
      <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
      </linearGradient>
      <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
      </linearGradient>
    </defs>
    <XAxis dataKey="name" />
    <YAxis />
    <CartesianGrid strokeDasharray="3 3" />
    <Tooltip />
    <ReferenceLine x={last(props.data).name} stroke="green" />
    <ReferenceDot x={last(props.data).name} y={last(props.data).uv} r={5} fill="red" stroke="none" isAnimationActive={true} />
    <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" isAnimationActive={true} />
    <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" isAnimationActive={true} />
  </AreaChart>
);

Chart.propTypes = propTypes;

export default Chart;
