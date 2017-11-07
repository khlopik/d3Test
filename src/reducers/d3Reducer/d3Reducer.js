import { map } from 'lodash/map';

const d3Reducer = (state = {
}, action) => {
  switch (action.type) {
    // case 'REMOVE_ITEM':
    //   return {
    //     ...state,
    //     cart: _.filter(state.cart, item => (item.id !== action.payload)),
    //   };
    default:
      return state;
  }
};

export default d3Reducer;
