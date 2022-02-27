import React from "react";
import Banner from "../Dashboard/Banner";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={{display: 'flex'}}>
        <Banner></Banner>
      </div>
    )
  }
}

export default Dashboard;