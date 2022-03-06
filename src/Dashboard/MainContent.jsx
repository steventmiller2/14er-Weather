import React from "react";
import "./MainContent.css";
import Table from './Table.jsx';

class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="mainContent">
        <Table/>
      </div>
    )
  }
}

export default MainContent;