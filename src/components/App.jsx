import React from 'react';
import Chart from '@/components/Chart';
import { connect } from 'react-redux';
import moment from 'moment';
import { addDataItem } from '@/actions/addData';
import { startStopDataLoad } from '@/actions/controls';


class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentWillMount() {
    let addData;
    if (this.props.controls.start) {
      addData = setInterval(() => {
          this.props.addDataItem({
            name: moment().format('hh:mm:ss'),
            uv: this.props.controls.randomDiffUV * 2 * (0.5 - Math.random()),
            pv: this.props.controls.randomDiffPV * 2 * (0.5 - Math.random()),
            amt: this.props.controls.randomDiffAMT * 2 * (0.5 - Math.random()),
          })
        },
        1000)
    } else {
      if (addData) {
        clearInterval(addData);
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    let addData, counter = 0;
    if (nextProps.controls.start && !this.props.controls.start) {
      addData = setInterval((counter) => {
          nextProps.addDataItem({
            name: moment().format('hh:mm:ss'),
            uv: nextProps.controls.randomDiffUV * 2 * (0.5 - Math.random()),
            pv: nextProps.controls.randomDiffPV * 2 * (0.5 - Math.random()),
            amt: nextProps.controls.randomDiffAMT * 2 * (0.5 - Math.random()),
          });
          if (counter > 10) {
            clearInterval(addData);
          }
        },
        1000)
    };
    if (!nextProps.controls.start && this.props.controls.start) {
      if (addData) {
        clearInterval(addData);
      }
    }
  }

  startStop(start) {

  }

  render() {
    return (
      <div>
        <span>Home Page</span>
        <button
          onClick={() => {
            this.props.startStopDataLoad(!this.props.controls.start)
        }}>
          {this.props.controls.start ? 'Stop' : 'Start'}
        </button>
        <Chart
          data={this.props.data}
          controls={this.props.controls}
        />
      </div>
    )
  }

};

const mapStateToProps = state => ({
  data: state.d3Reducer.data,
  controls: state.d3Reducer.controls,
});

const mapDispatchToProps = dispatch => ({
  addDataItem: (data) => {
    dispatch(addDataItem(data));
  },
  startStopDataLoad: (start) => {
    dispatch(startStopDataLoad(start))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
