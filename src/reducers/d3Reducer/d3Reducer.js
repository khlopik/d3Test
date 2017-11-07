import map from 'lodash/map';
import last from 'lodash/last';
import moment from 'moment';

const d3Reducer = (state = {
  data: [
    {date: moment().add(-7, 's').format('hh:mm:ss'), uv: 4000, pv: 2400, amt: 2400},
    {name: moment().add(-6, 's').format('hh:mm:ss'), uv: 3000, pv: 1398, amt: 2210},
    {name: moment().add(-4, 's').format('hh:mm:ss'), uv: 2780, pv: 3908, amt: 2000},
    {name: moment().add(-3, 's').format('hh:mm:ss'), uv: 1890, pv: 4800, amt: 2181},
    {name: moment().add(-5, 's').format('hh:mm:ss'), uv: 2000, pv: 9800, amt: 2290},
    {name: moment().add(-2, 's').format('hh:mm:ss'), uv: 2390, pv: 3800, amt: 2500},
    {name: moment().add(-1, 's').format('hh:mm:ss'), uv: 3490, pv: 4300, amt: 2100},
  ]
}, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      const lastRecord = last(state.data);
      console.log('action.payload', action.payload);
      return {
        data: [...state.data, {
          name: action.payload.name,
          uv: lastRecord.uv + lastRecord.uv * action.payload.uv / 100,
          pv: lastRecord.pv + lastRecord.pv * action.payload.pv / 100,
          amt: lastRecord.amt + lastRecord.amt * action.payload.amt / 100,
        }],
      };
    default:
      return state;
  }
};

export default d3Reducer;
