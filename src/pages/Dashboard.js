import React from "react";
import './Dashboard.css';
import Banner from "../Dashboard/Banner";
import Body from '../Dashboard/Body';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='dashboard'>
        <Banner></Banner>
        <Body></Body>
      </div>
    )
  }
}

export default Dashboard;