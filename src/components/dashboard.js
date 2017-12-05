import React, { Component } from 'react';
import * as d3 from 'd3';
import testData from '../d3/data'
import chartData from '../d3/linegraph.js'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: 'loading...'}
  }

  componentDidMount() {
    console.log(testData);
    this.setState({data: testData});
    //console.log(this.state.data);
    //chartData(this.state.data)
  }

  componentDidUpdate() {
    if (this.state.data !== 'loading...') {
      chartData(this.state.data)
    }

  }

  render() {
    return (
    <div className = 'dashboard card'>
    <svg id="graph" width="960" height="500"></svg>
    </div>
  )}
}

export default Dashboard;
