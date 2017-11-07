import React from 'react';
import Chart from '@/components/Chart';
import { connect } from 'react-redux';
import moment from 'moment';
import { addDataItem } from '@/actions/addData';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const addData = setInterval(() => {
        this.props.addDataItem({
          name: moment().format('hh:mm:ss'),
          uv: 20 * (0.5 - Math.random()),
          pv: 20 * (0.5 - Math.random()),
          amt: 20 * (0.5 - Math.random()),
        })
      },
      1000)
  }

  render() {
    return (
      <div>
        <span>Home Page</span>
        <Chart data={this.props.data}/>
      </div>
    )
  }

};

const mapStateToProps = state => ({
  data: state.d3Reducer.data,
});

const mapDispatchToProps = dispatch => ({
  addDataItem: (data) => {
    dispatch(addDataItem(data));
  },
  // removeItem: (id) => {
  //   dispatch(removeItemFromCart(id));
  // },
  // changeQuantity: (id, newQuantity) => {
  //   dispatch(changeItemQuantity(id, newQuantity));
  // },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
